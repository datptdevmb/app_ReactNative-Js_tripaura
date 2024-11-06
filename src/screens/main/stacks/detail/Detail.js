import {
  Animated,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Lable from '../../../../components/common/labelText';
import Button from '../../../../components/common/button/Button';
import {useEffect, useRef, useState} from 'react';
import colors from '../../../../constants/colors';
import {dataimage, tourdetail, days} from '../../../../constants/data';
import Icons from '../../../../constants/Icons';
import IcLocate from '../../../../assets/icons/Ic_locate';
import IcClock from '../../../../assets/icons/Ic_clock';
import IcleftArrow from '../../../../assets/icons/Ic_leftArrow';
import IcFavorite from '../../../../assets/icons/bottom_tab/Ic_favorite';
import { KiemTraYeuThich, themXoaYeuThichTour } from '../../../../redux/slices/favouriteducers';
import Toast from '../../../../components/common/toast/Toast';
import { ROUTES } from '../../../../constants/routes';
const reviews = [
	{
		id: 1,
		rating: 5,
		date: '09/09/2024',
		name: 'datpham',
		reviewText: 'Một trải nghiệm tuyệt vời đáng để trải nghiệm',
		imageUrl: 'https://link-to-avatar-image.com/avatar1.jpg',
	},
	{
		id: 2,
		rating: 4,
		date: '15/10/2024',
		name: 'datpham',
		reviewText: 'Chuyến đi thú vị và đáng nhớ!',
		imageUrl: 'https://link-to-avatar-image.com/avatar2.jpg',
	},

];

const Detail = ({ navigation, route }) => {
	const { _id: tourId } = route.params;
	const dispatch = useDispatch();

	const {
		tourById,
		adultTickets,
		childTickets,
		totalPrice,
		loading,
		selectedDate,
	} = useSelector((state) => state.reducer.tour);

	const { isTourFavorited, favoritesStatus, message } = useSelector((state) => state.reducer.favorites)
	const { user } = useSelector((state) => state.reducer.auth);
	const [showToast, setShowToast] = useState(false);


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
	const handleBack = () => navigation.goBack();


	const handleFavorite = () => {
		dispatch(themXoaYeuThichTour(
			{
				userId: user.user._id,
				tourId
			}
		))

		if (favoritesStatus === 'success') {
			setShowToast(true);
			setTimeout(() => setShowToast(false), 3000);
		}
	}

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

	const handleNavigateToFavorite = () => {
		navigation.navigate('yeuthich')
	}

	useEffect(() => {
		const loadData = async () => {
			try {
				await Promise.all([
					dispatch(fetchTourById({ tourId })),
					dispatch(KiemTraYeuThich({ userId: user.user._id, tourId }))
				]);
			} catch (err) {
				console.error('Error fetching data:', err);
			}
		};
		loadData();
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
			{showToast && favoritesStatus === 'success'&&(
				<Toast
					onPress={handleNavigateToFavorite}
					message={message}
				/>
			)}
			<TouchableOpacity
				onPress={handleBack}
				style={styles.btnBack}>
				<IcleftArrow />
			</TouchableOpacity>

			<TouchableOpacity
				onPress={handleFavorite}
				style={styles.btnFavorite}>
				{
					!isTourFavorited
						? <Ic_ouFavorite />
						: <IcFavorite color={'white'} />
				}
			</TouchableOpacity>

			<AnimatedScrollView
				TopNavBarComponent={tourName && <TopNav tourName={tourName} />}
				headerImage={!loading && imges
					? { uri: imges[0] }
					: { uri: 'https://bizflyportal.mediacdn.vn/bizflyportal/459/347/2020/06/02/17/37/70515910726734841.jpg' }}
				imageStyle={{
					height: 243,
				}}
			>
				<View
					style={{
						position: 'absolute',
						height: 243,
						top: 0,
						zIndex: 1,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(0, 0, 0, 0.3)',
					}}
				/>

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
							<ReviewList reviews={reviews} />
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
				<Button
					style={styles.btn}
					label="Mua Ngay"
					onPress={toggleBottomSheet} />
			</View>

            <View style={styles.indicator}></View>

            <Lable style={styles.mr_top} lable={'Ngày khởi hành hiện có'} />

            <View style={styles.flex_row}>
              {days &&
                days.map((item, index) => (
                  <View key={index}>
                    <Button
                      styleText={
                        index === selectedInd
                          ? styles.btndaytextSelected
                          : styles.btndaytext
                      }
                      onPressed={() => handleItemDayPress(index)}
                      style={
                        index === selectedInd
                          ? styles.selectedItem
                          : styles.btnday
                      }
                      label={item.day}
                    />
                  </View>
                ))}
              <TouchableOpacity
                onPress={handleClickAllday}
                style={[
                  selectedAllday ? styles.btndayflase : styles.btnday,
                  styles.flex_row,
                ]}>
                <IcCalendar />
                <IcBelow />
              </TouchableOpacity>
            </View>

            <Lable style={styles.mr_t_26} lable={'Mô tả chuyến đi'} />
            <Text style={[styles.bodytext, styles.mr_t_14]}>
              {tour[0].description}
            </Text>
            <Lable style={styles.mr_t_14} lable={'Đánh giá chuyến đi'} />

            <View style={[styles.flex_row, styles.centerVertical]}>
              <View style={[styles.flex_row, styles.centerVertical]}>
                <Text style={styles.textTotalStare}>5</Text>
                <Text>/5</Text>
              </View>
              <Rating
                style={styles.rating}
                ratingCount={5}
                startingValue={5}
                imageSize={14}
              />
              <View>
                <Text style={styles.textD}>1000+ luot danh gia</Text>
              </View>
            </View>
            <ReviewCard review={review} />
            <Button
              label="Xem them danh gia"
              style={styles.btnReview}
              styleText={styles.textBtnReview}
            />

            <Accordion title="Lưu ý trước khi đặt" sections={general} />
            <Accordion title="Điều khoản chung" sections={generalTerms} />
          </View>
        </AnimatedScrollView>
      ) : (
        <></>
      )}

      {/* <TouchableOpacity
        onPress={handleClickImage}
      >
        <Image
          style={styles.image}
          source={Icons.image} />
      </TouchableOpacity> */}

      {/* <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          {
            useNativeDriver: false
          }
        )}

      > */}

      {/* </ScrollView> */}
    </View>
  );
}

export default Detail;

const styles = StyleSheet.create({
  bodytext: {
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: 'Poppins_Regular',
    fontWeight: 400,
    lineHeight: 21,
    letterSpacing: 0.048,
    color: '#494B4B',
  },
  navBar_Back: {
    position: 'absolute',
    left: 16,
    top: 70,
  },
  navBar_Favorite: {
    position: 'absolute',
    right: 16,
    top: 70,
  },
  navBar_Support: {
    position: 'absolute',
    right: 48,
    top: 70,
  },
  navBar: {
    width: '100%',
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  rating: {
    marginStart: 8,
  },
  IconArrowCon: {
    position: 'absolute',
    padding: 12,
    backgroundColor: colors.onPrimary,
    borderRadius: 20,
    left: 24,
    top: 220,
  },
  headerN: {
    flexDirection: 'row',
    marginTop: 50,
    width: '100%',
    height: 455,
    padding: 20,
    // backgroundColor: 'red',
    // alignContent:'space-evenly',
    // justifyContent: 'space-between',
  },
  textD: {
    fontSize: 16,
    color: '#212121',
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontStyle: 'normal',
    marginStart: 8,
  },
  textTotalStare: {
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
  },
  btnReview: {
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 30,
  },
  btndayflase: {
    width: 80,
    height: 32,
    backgroundColor: colors.primary_500,
    marginEnd: 12,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  IconFavoriteCon: {
    position: 'absolute',
    padding: 12,
    backgroundColor: colors.onPrimary,
    lineHeight: 24,
    borderRadius: 20,
    right: 16,
    top: 220,
  },
  textBtnReview: {
    color: '#212121',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
  },
  centerVertical: {
    alignItems: 'center',
  },
  IclocateContainer: {
    backgroundColor: '#F8F8F8',
    padding: 10,
    borderRadius: 20,
  },
  IconSupportCon: {
    position: 'absolute',
    padding: 12,
    backgroundColor: colors.onPrimary,
    borderRadius: 20,
    right: 80,
    top: 220,
  },
  header: {
    height: 60,
    backgroundColor: '#0572E7', // Màu chính của bạn
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    color: 'black',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mr_s_24: {
    marginStart: 24,
  },
  jt: {
    justifyContent: 'flex-start',
  },
  ctVetical: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.onPrimary,
  },
  image: {
    width: '100%',
    height: 243,
  },
  selectedItem: {
    backgroundColor: colors.primary_500,
    width: 80,
    height: 32,
    marginEnd: 12,
    marginTop: 16,
  },

  tourname: {
    color: colors.Grey_900,
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    fontStyle: 'normal',
    fontWeight: '800',
  },
  contentContaienr: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  flex_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnday: {
    width: 80,
    height: 32,
    backgroundColor: colors.Gainsboro,
    marginEnd: 12,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  btndaytextSelected: {
    color: colors.onPrimary,
  },
  text: {
    marginStart: 10,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'regular',
    color: colors.Grey_800,
  },
  btndaytext: {
    color: colors.Grey_800,
  },
  mr_top: {
    marginTop: 12,
  },
  mr_t_26: {
    marginTop: 26,
  },
  cl: {
    flexDirection: 'column',
  },
  indicator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.Grey_0,
    marginTop: 25,
  },
  mr_t_14: {
    marginTop: 14,
  },
  mr_t_16: {
    marginTop: 16,
  },
});
