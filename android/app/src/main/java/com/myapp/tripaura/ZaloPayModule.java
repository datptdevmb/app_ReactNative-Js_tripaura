package com.myapp.tripaura;

import android.app.Activity;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.myapp.tripaura.Api.CreateOrder;

import org.json.JSONObject;

import vn.zalopay.sdk.ZaloPayError;
import vn.zalopay.sdk.ZaloPaySDK;
import vn.zalopay.sdk.listeners.PayOrderListener;

public class ZaloPayModule extends ReactContextBaseJavaModule {



    // Khởi tạo mReactContext khi tạo module
    public ZaloPayModule(ReactApplicationContext context) {
        super(context);
        mReactContext = context;  // Gán giá trị cho mReactContext
    }

    @Override
    public String getName() {
        return "ZaloPayModule";
    }

    private static ReactApplicationContext mReactContext;

    // Phương thức gửi sự kiện về JavaScript
    public static void sendEvent(String eventName, String eventData) {
        if (mReactContext != null) {
            mReactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(eventName, eventData);
        }
    }

    @ReactMethod
    public void createOrder(String amount, Callback callback) {

        try {
            CreateOrder orderApi = new CreateOrder();
            JSONObject data = orderApi.createOrder(amount);

            String code = data.getString("return_code");

            Log.e("ZaloPay", "Return code: " + code);

            if (code.equals("1")) {
                String token = data.getString("zp_trans_token");
                Log.e("ZaloPay", "Token: " + token);

                final Activity activity = getCurrentActivity();
                if (activity == null) {
                    Log.e("ZaloPay", "Activity is null!");
                    return;
                }



                ZaloPaySDK.getInstance().payOrder(activity, token, "demozpdk://app", new PayOrderListener() {
                    @Override
                    public void onPaymentSucceeded(String transactionId, String zpTransToken, String appTransId) {
                       int resultCode = 1 ;
                        callback.invoke(resultCode);
                        Log.e("log ","log ");
                    }

                    @Override
                    public void onPaymentCanceled(String zpTransToken, String appTransId) {
                        int resultCode = 2 ;
                        callback.invoke(resultCode);
                    }

                    @Override
                    public void onPaymentError(ZaloPayError error, String zpTransToken, String appTransId) {
                        int resultCode = 0 ;
                        callback.invoke(resultCode);
                    }
                });

            } else {
                Log.e("ZaloPay", "Failed to create order, code: " + code);
                callback.invoke("Failed to create order, code: " + code);
            }

        } catch (Exception e) {
            Log.e("ZaloPay", "Error in createOrder: " + e.getMessage());
            callback.invoke("Error: " + e.getMessage());
        }
    }
}


