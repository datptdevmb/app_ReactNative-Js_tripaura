package com.myapp.tripaura; // replace your-apps-package-name with your app’s package name
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.myapp.tripaura.Api.CreateOrder;

import org.json.JSONObject;

import java.util.Map;
import java.util.HashMap;
import java.util.Objects;

import vn.zalopay.sdk.ZaloPayError;
import vn.zalopay.sdk.ZaloPaySDK;
import vn.zalopay.sdk.listeners.PayOrderListener;

public class ZaloPayModule extends ReactContextBaseJavaModule {
    public ZaloPayModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "ZaloPayModule";
    }

    @ReactMethod
    public void createOrder (String amount){
        CreateOrder orderApi  = new CreateOrder();
        try {
            JSONObject data = orderApi.createOrder(amount);
            String code = data.getString("return_code");
            if(code.equals("1")){
                String token = data .getString("zp_trans_token");
                ZaloPaySDK.getInstance().payOrder(Objects.requireNonNull(getCurrentActivity()), token, "demozpdk://app", new PayOrderListener() {
                    @Override
                    public void onPaymentSucceeded(String s, String s1, String s2) {
                        Log.d("ZaloPay", "Payment canceled: ");
                    }

                    @Override
                    public void onPaymentCanceled(String s, String s1) {
                        Log.d("ZaloPay", "Payment canceled: ");
                    }

                    @Override
                    public void onPaymentError(ZaloPayError zaloPayError, String s, String s1) {
                        Log.e("ZaloPay", "Payment error: ");
                    }
                });
            }
        }catch (Exception e ){
            Log.e("ZaloPay", "Payment error: "+e);
        }
        Log.e("fdfd", "createOrder: " );
    }
}