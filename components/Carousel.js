import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	View,
	Dimensions,
	LogBox,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

const Carousel = () => {
	const flatlistRef = useRef();
	// Get Dimesnions
	const screenWidth = Dimensions.get("window").width;
	const [activeIndex, setActiveIndex] = useState(0);

	// Auto Scroll

	useEffect(() => {
		let interval = setInterval(() => {
			if (activeIndex === carouselData.length - 1) {
				flatlistRef.current.scrollToIndex({
					index: 0,
					animation: true,
                    
				});
			} else {
				flatlistRef.current.scrollToIndex({
					index: activeIndex + 1,
					animation: true,
				});
			}
		}, 5000);

		return () => clearInterval(interval);
	});

	const getItemLayout = (data, index) => ({
		length: screenWidth,
		offset: screenWidth * index, // for first image - 300 * 0 = 0pixels, 300 * 1 = 300, 300*2 = 600
		index: index,
	});
	// Data for carousel
	const carouselData = [
		{
			id: "01",
			image: require("../assets/information-technology.jpg"),
		},
		{
			id: "02",
			image: require("../assets/tcm.jpg"),
		},
		
	];

	//  Display Images // UI
	const renderItem = ({ item, index }) => {
		return (
			<View>
				<Image
					source={item.image}
					style={{ height: 200, width: screenWidth, borderRadius: 10}}
				/>
			</View>
		);
	};

	// Handle Scroll
	const handleScroll = (event) => {
		// Get the scroll position
		const scrollPosition = event.nativeEvent.contentOffset.x;
		// Get the index of current active item

		const index = scrollPosition / screenWidth;

        const roundedIndex = Math.round(index);
		// Update the index

		setActiveIndex(roundedIndex);
	};

	// Render Dot Indicators
	const renderDotIndicators = () => {
		return carouselData.map((dot, index) => {
			// if the active index === index

			if (activeIndex === index) {
				return (
					<View
                        key={index}
						style={{
							backgroundColor: "#B7DCFE",
							height: 10,
							flex: 1,
							borderRadius: 100,
							marginHorizontal: 6,
						}}
					></View>
				);
			} else {
				return (
					<View
						key={index}
						style={{
							backgroundColor: "#BDB9B9",
							height: 5,
							flex: 1,
							borderRadius: 100,
							marginHorizontal: 6,
						}}
					></View>
				);
			}
		});
	};

	return (
		<View>
			<FlatList
				data={carouselData}
				ref={flatlistRef}
				getItemLayout={getItemLayout}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				horizontal={true}
				pagingEnabled={true}
				onScroll={handleScroll}
			/>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					marginTop: 10,
				}}
			>
				{renderDotIndicators()}
			</View>
		</View>
	);
};

export default Carousel;

const styles = StyleSheet.create({
    
});