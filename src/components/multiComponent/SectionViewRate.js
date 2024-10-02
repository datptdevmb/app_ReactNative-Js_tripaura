import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import fontsize from '../../constants/fontsize';
import colors from '../../constants/colors';

const SectionViewRate = ({ data  }) => {
    const [shownotes, setShownotes] = useState({});

    const toggleShow = (id) => {
        setShownotes((prevShownotes) => ({
            ...prevShownotes,
            [id]: !prevShownotes[id],
        }));
    };

    const renderItems = (item) => {
        const isLongComment = item.comment.length > 100;
        return (
            <View key={item.id} style={styles.containerommentandrate}>
                <View style={styles.containeravt}>
                    <Image source={item.avatar} style={styles.avt} />
                    <View>
                        <Text style={styles.textname}>{item.nameuser}</Text>
                        <Text style={styles.textday}>{item.day}</Text>
                    </View>
                </View>

                <View style={styles.containertextandstar}>
                    <View style={styles.containerstar}>
                        {[1, 2, 3, 4, 5].map((starnho) => (
                            <Image
                                key={starnho}
                                source={item.star}
                                style={styles.starnho}
                            />
                        ))}
                    </View>
                    <Text style={styles.textcomment} numberOfLines={shownotes[item.id] ? null : 3}>
                        {item.comment}
                    </Text>
                    {isLongComment && (
                        <TouchableOpacity onPress={() => toggleShow(item.id)}>
                            <Text style={styles.textshowmore}>
                                {shownotes[item.id] ? 'Thu gọn' : 'Xem thêm'}
                            </Text>
                        </TouchableOpacity>
                    )}
                    <View style={styles.containerimage}>
                        {item.imagearr.map((image, index) => (
                            <Image
                                key={index}
                                source={image}
                                style={styles.image}
                            />
                        ))}
                    </View>
                </View>
            </View>
        );
    };

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.column}>
            {data.map((item) => renderItems(item))}
            </View>
        </ScrollView>

    );
};

export default SectionViewRate;

const styles = StyleSheet.create({
    container: {
        width: '100%',

    },
    containerommentandrate: {
        width: '100%',
        height: 'auto',
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        flexWrap: 'wrap',
        backgroundColor: colors.Grey_100,
        marginTop: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.Grey_100,

    },
    containeravt: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
    },
    avt: {
        width: 38,
        height: 38,
        borderRadius: 38 / 2,
    },
    textname: {
        fontSize: fontsize.md,
        color: colors.Grey_900,
        fontWeight: '700',
        marginLeft: 10,
        lineHeight: 24,
    },
    textday: {
        fontSize: fontsize.sm,
        color: colors.Grey_800,
        fontWeight: '400',
        marginLeft: 10,
        lineHeight: 20,
    },
    containerstar: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '100%',
        height: 'auto',
        marginTop: 22,
    },
    starnho: {
        width: 15,
        height: 15,
    },
    containertextandstar: {
        width: '100%',
        height: 'auto'
    },
    textcomment: {
        fontSize: fontsize.md,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20,
        color: colors.Grey_800,
        marginTop: 8,
    },
    containerimage: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row'
    },
    image: {
        width: 97,
        height: 73,
        borderRadius: 10,
        marginStart: 6,
        marginTop: 22,
    },
    textshowmore: {
        fontSize: fontsize.md,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 20,
        color: colors.primary_500,

    }
});
