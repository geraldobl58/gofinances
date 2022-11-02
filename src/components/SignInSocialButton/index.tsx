import { TouchableOpacityProps } from "react-native";

import { SvgProps } from "react-native-svg";

import { Button, ImageContainer, Text } from "./styles";

interface SignInSocialButtonProps extends TouchableOpacityProps {
  title: string
  svg: React.FC<SvgProps>
}

export function SignInSocialButton({
  title,
  svg: Svg,
  ...rest
}: SignInSocialButtonProps) {
  return (
    <Button {...rest} activeOpacity={.9}>
      <ImageContainer>
        <Svg />
      </ImageContainer>
      <Text>{title}</Text>
    </Button>
  )
}