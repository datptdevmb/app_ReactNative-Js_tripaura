import {
	StatusBar,
	StyleSheet,
	Text,
	View,
	Animated,
	TouchableOpacity,
	ToastAndroid
} from 'react-native';

import { useEffect, useRef, useState } from 'react';
import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';
import { decreaseAdultTicket, decreaseChildTicket, fetchTourById, increaseAdultTicket, increaseChildTicket, setSelectedDate } from '../../../../redux/slices/tour.slice';
import { useDispatch, useSelector } from 'react-redux';
import ImageList from './ImageList';
import LocationInfo from './LocationInfo';
import Lable from '../../../../components/common/labelText';
import Button from '../../../../components/common/button/Button';
import LottieView from 'lottie-react-native';
import TopNav from './TopNav';
import Ic_x from '../../../../assets/icons/Ic_X';
import DepartureDateSelector from './DepartureDateSelector';
import TicketSelector from './TicketSelector';
import RefundPolicy from './RefundPolicy';
import ReviewCard from '../../../../components/common/card/ReviewCard';
import formatCurrencyVND from '../../../../untils/formatCurrencyVND';

const Detail = ({ navigation, route }) => {
	const { _id: tourId } = route.params;
	const dispatch = useDispatch();
	// const { tourById, loading } = useSelector(state => );
	// const [adultTickets, setAdultTickets] = useState(0);
	// const [childTickets, setChildTickets] = useState(0);
	// const [totalPrice, setTotalPrice] = useState(0);

	const {
		tourById,
		adultTickets,
		childTickets,
		totalPrice,
		loading,
		selectedDate,
		err
	} = useSelector((state) => state.reducer.tour);


	const {
		imges,
		tourName,
		description,
		location,
		details,
	} = tourById;

	const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
	const translateY = useRef(new Animated.Value(500)).current;

	const handleIncreaseAdult = () => dispatch(increaseAdultTicket());
	const handleIncreaseChild = () => dispatch(increaseChildTicket());
	const handleDecreaseAdult = () => dispatch(decreaseAdultTicket());
	const handleDecreaseChild = () => dispatch(decreaseChildTicket());
	const handelNavigateToOrder = () => {
		if (!selectedDate) {
			console.log('vui lòng chọn ngày')
			return
		}
		if (adultTickets === 0 && childTickets === 0) {
			console.log('vui lòng chọn số lượng vé')
			return
		}
		navigation.navigate('Order')
	}

	useEffect(() => {
		dispatch(fetchTourById(tourId));
	}, [dispatch]);

	const toggleBottomSheet = () => {
		setBottomSheetVisible(!bottomSheetVisible);
		Animated.timing(translateY, {
			toValue: bottomSheetVisible ? 500 : 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	return (
		<View style={styles.container}>
			<AnimatedScrollView
				TopNavBarComponent={tourName && <TopNav tourName={tourName} />}
				headerImage={!loading && imges ? { uri: imges[0] } : undefined}
				imageStyle={{ height: 243 }}
			>
				<StatusBar translucent backgroundColor="transparent" />
				{loading && (
					<View style={styles.animatedHeaderLoading}>
						<LottieView
							source={require('../../../../assets/lottile/loading.json')}
							autoPlay
							loop
							style={styles.lottieAnimation}
						/>
					</View>
				)}

				{!loading && (
					<View>
						<ImageList dataimage={imges} />
						<View style={styles.tourInfor}>
							<Text style={styles.tourname}>{tourName}</Text>
							<LocationInfo location={location?.departure} />
							<View style={styles.divider} />
							<Lable lable="Mô tả chuyến đi" />
							<Text style={styles.bodytext}>{description}</Text>
							<Lable style={styles.mrtop_12} lable="Đánh giá chuyến đi" />
							<ReviewCard />
						</View>
						<View style={{ height: 500 }}></View>
					</View>
				)}
			</AnimatedScrollView>

			{/* Button Bottom */}
			<View style={styles.btnContainer}>
				<View style={styles.price}>
					<Text style={styles.textprice}>Giá chỉ từ</Text>
					<Text style={styles.total}>700.000 VNĐ</Text>
				</View>
				<Button style={styles.btn} label="Mua Ngay" onPress={toggleBottomSheet} />
			</View>

			{/* Backdrop và Bottom Sheet */}
			{bottomSheetVisible && (
				<TouchableOpacity style={styles.backdrop} >
					<Animated.View
						style={[
							styles.bottomSheet,
							{ transform: [{ translateY }] },
						]}
					>
						<View style={styles.InforContainer}>
							<TouchableOpacity>
								<Ic_x onPress={toggleBottomSheet} />
							</TouchableOpacity>
							<Text style={styles.tourname}>{tourName}</Text>
							<DepartureDateSelector
								onSelectDate={(date) => dispatch(setSelectedDate(date))}
								selectedDate={selectedDate}
								data={details} />

							<TicketSelector
								onIncreaseAdult={handleIncreaseAdult}
								onIncreaseChild={handleIncreaseChild}
								onDecreaseAdult={handleDecreaseAdult}
								onDecreaseChild={handleDecreaseChild}
								adultPrice={details[0].priceAdult}
								childPrice={details[0].priceChildren}
								childTickets={childTickets}
								adultTickets={adultTickets}
							/>

							<RefundPolicy />
						</View>


						<View style={styles.btnContainer}>
							<View style={styles.price}>
								<Text style={styles.textprice}>Giá chỉ từ</Text>
								<Text style={styles.total}>{formatCurrencyVND(totalPrice)}</Text>
							</View>
							<Button
								style={styles.btn} label="Mua Ngay"
								onPress={handelNavigateToOrder} />
						</View>


					</Animated.View>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default Detail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	animatedHeaderLoading: {
		backgroundColor: 'black',
		position: 'absolute',
		width: '100%',
		height: 243,
		zIndex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	InforContainer: {
		padding: 16
	},
	tourInfor: {
		paddingHorizontal: 16,
	},
	mrtop_12: {
		marginTop: 12
	},
	tourname: {
		marginTop: 14,
		color: "#212121",
		fontSize: 18,
		lineHeight: 27,
		fontFamily: 'Poppins-Bold',
		fontStyle: 'normal',
		fontWeight: '700',
	},
	bodytext: {
		marginTop: 14,
		fontSize: 12,
		fontFamily: 'Poppins_Regular',
		lineHeight: 18,
		letterSpacing: 0.4,
		fontWeight: '400',
		color: '#494B4B',
	},
	lottieAnimation: {
		width: 100,
		height: 100,
	},
	btnContainer: {
		height: 100,
		justifyContent: 'center',
		width: '100%',
		position: 'absolute',
		bottom: 0,
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: -1 },
		shadowOpacity: 0.25,
		shadowRadius: 1,
		elevation: 30,
	},
	bottomSheet: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: 600,
		backgroundColor: 'white',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: -2 },
		shadowOpacity: 0.3,
		shadowRadius: 10,
		elevation: 5,
	},
	price: {
		position: 'absolute',
		left: 16,
	},
	textprice: {
		fontSize: 12,
		color: 'black',
		fontWeight: 'bold',
	},
	total: {
		fontSize: 16,
		color: '#2196F3',
	},
	btn: {
		width: 148,
		height: 44,
		backgroundColor: '#2196F3',
		position: 'absolute',
		right: 16,
	},
	divider: {
		backgroundColor: "#ededed",
		width: "100%",
		height: 2,
		marginVertical: 10,
	},
	backdrop: {
		// ...StyleSheet.absoluteFillObject,
		// backgroundColor: 'rgba(0, 0, 0, 0.5)',
		// justifyContent: 'flex-end',
	}
});
