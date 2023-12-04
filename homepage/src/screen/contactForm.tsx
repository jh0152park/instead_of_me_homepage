// 개인 or 회사
// 성함 혹은 회사명
// 연락가능한 연락처
// 답장받을이메일
// 문의내용
// 버튼

import { Box, Center, Image, Text, VStack, useToast } from "@chakra-ui/react";
import TextForm from "../components/contactForm/textForm";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
	const logo =
		"https://raw.githubusercontent.com/jh0152park/instead_of_me_homepage/main/images/logo/blackLogo/boxLogo3.ico?raw=true";

	const formElRef = useRef<HTMLFormElement>(null);
	const toast = useToast();
	const navigate = useNavigate();

	function onClickLogo() {
		navigate("/");
	}

	async function onSubmit() {
		try {
			await emailjs.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
				process.env.REACT_APP_EMAILJS_TEMPLATES_ID as string,
				formElRef.current!,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY
			);

			toast({
				status: "success",
				title: "Success",
			});

			formElRef.current!.reset();
		} catch (error) {
			console.log(error);
			toast({
				status: "error",
				title: "Failed",
			});
		}
	}

	return (
		<Center w="100dvw">
			<VStack spacing={5} minWidth={"100%"}>
				<Image
					w={{
						base: "100px",
						md: "150px",
						lg: "200px",
					}}
					mt={"10px"}
					src={logo}
					objectFit="cover"
					cursor={"pointer"}
					onClick={onClickLogo}
				/>

				<VStack alignSelf={"center"}>
					<Text
						color={"black"}
						fontWeight={"bold"}
						fontSize={{
							base: "18px",
							md: "24px",
							lg: "30px",
						}}
					>
						문의하기
					</Text>

					<Text
						color={"black"}
						fontWeight={"bold"}
						fontSize={{
							base: "18px",
							md: "24px",
							lg: "30px",
						}}
					>
						Contact
					</Text>
				</VStack>

				<form
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: 10,
						width: "100%",
					}}
					ref={formElRef}
				>
					<TextForm
						select
						title="개인이신가요?"
						engTitle="Are you personal?"
						name="is_personal"
					/>

					<TextForm
						title="귀하 또는 회사의 이름을 입력해주세요."
						engTitle="Please enter the name of your or company."
						name="name"
					/>

					<TextForm
						title="연락 가능한 연락처를 입력해주세요."
						engTitle="Please enter contact information where you can be contacted."
						name="contact"
					/>

					<TextForm
						title="답장 받을 이메일을 입력해주세요."
						engTitle="Please enter your email address to receive a reply."
						name="email"
					/>

					<TextForm
						title="문의하고싶은 내용을 가능한 자세히 입력해주세요."
						engTitle="Please enter the information you wish to inquire about as detail as possible."
						name="detail"
					/>
				</form>
				<Box
					px={{
						base: "20px",
						md: "25px",
						lg: "30px",
					}}
					py={{
						base: "5px",
						md: "7px",
						lg: "10px",
					}}
					backgroundColor={"green.400"}
					mt={15}
					borderRadius={{
						base: "15px",
						md: "18px",
						lg: "20px",
					}}
					cursor={"pointer"}
					onClick={onSubmit}
					alignSelf={"center"}
				>
					<Text
						color={"whitesmoke"}
						fontSize={{
							base: "12px",
							md: "14px",
							lg: "16px",
						}}
						fontWeight={"bold"}
						textAlign={"center"}
					>
						제출하기
					</Text>
					<Text
						color={"whitesmoke"}
						fontSize={{
							base: "12px",
							md: "14px",
							lg: "16px",
						}}
						fontWeight={"bold"}
						textAlign={"center"}
					>
						Submit
					</Text>
				</Box>
			</VStack>
		</Center>
	);
}
