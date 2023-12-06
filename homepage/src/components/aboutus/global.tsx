import { Center, Box, VStack, Heading, Image } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { styled } from "styled-components";
import { displayResolution, languageState } from "../../global/project_common";
import { useRecoilValue } from "recoil";
import LANGUAGE from "../../global/language";

const BOX = styled(motion.div)`
	width: 250px;
	height: 50px;
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media screen and (min-width: 48em) {
		width: 500px;
		height: 100px;
		margin-bottom: 50px;
	}

	@media screen and (min-width: 62em) {
		width: 1000px;
		height: 200px;
		margin-bottom: 100px;
	}
`;

export default function Global() {
	const currentLanguage = useRecoilValue(languageState);
	const currentMode = useRecoilValue(displayResolution);
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

	const image =
		"https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/icons/earth2.png?raw=true";

	return (
		<Center
			w="100dvw"
			h={{
				base: "500px",
				md: "800px",
				lg: "1000px",
			}}
			position="relative"
			color="black"
			bgColor="whitesmoke"
			overflowX={"hidden"}
		>
			<BOX
				style={{
					scale: scale,
				}}
			>
				<Image
					w={{
						base: "200px",
						md: "200px",
						lg: "250px",
					}}
					h={{
						base: "200px",
						md: "200px",
						lg: "250px",
					}}
					objectFit="fill"
					src={image}
				/>

				{currentMode === "mobile" ? <Box mt="50px" /> : null}

				<Box position="absolute" bottom="-50px">
					<VStack spacing="0">
						<Heading
							fontSize={{
								base: "10px",
								md: "12px",
								lg: "16px",
							}}
						>
							{LANGUAGE[currentLanguage].Wherever}
						</Heading>
						<Heading
							fontSize={{
								base: "7px",
								md: "12px",
								lg: "16px",
							}}
						>
							{
								LANGUAGE[currentLanguage][
									"다양한 국가와의 협업 경험을 토대로"
								]
							}
							&nbsp;
							{
								LANGUAGE[currentLanguage][
									"의뢰인의 국가, 시간을 뛰어넘습니다."
								]
							}
						</Heading>
					</VStack>
				</Box>
			</BOX>
		</Center>
	);
}
