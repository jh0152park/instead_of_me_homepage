import { HStack, Select, Text, Textarea, VStack } from "@chakra-ui/react";

interface ITextForm {
	select?: boolean;
	title: string;
	engTitle: string;
	name: string;
}

export default function TextForm({
	select = false,
	title,
	engTitle,
	name,
}: ITextForm) {
	return (
		<HStack
			alignSelf={"center"}
			minWidth={{
				base: "100%",
				md: "85%",
				lg: "70%",
			}}
			justifyContent={"space-between"}
			px={"10px"}
			mb={"50px"}
		>
			<VStack alignItems={"flex-start"}>
				<Text
					color={"black"}
					fontWeight={"semibold"}
					fontSize={{
						base: "10px",
						md: "14px",
						lg: "18px",
					}}
				>
					{title}
				</Text>
				<Text
					color={"black"}
					fontWeight={"semibold"}
					fontSize={{
						base: "10px",
						md: "14px",
						lg: "18px",
					}}
				>
					{engTitle}
				</Text>
			</VStack>

			{select ? (
				<Select
					maxWidth={{
						base: "45%",
						md: "50%",
						lg: "60%",
					}}
					name={name}
					id={name}
				>
					<option value={"개인(individual)"}>네(Yes)</option>
					<option value={"회사(company)"}>아니오(No)</option>
				</Select>
			) : (
				<Textarea
					maxWidth={{
						base: "45%",
						md: "50%",
						lg: "60%",
					}}
					name={name}
					id={name}
				/>
			)}
		</HStack>
	);
}
