import { useState } from "react";
import {
  Text,
  VStack,
  Box,
  Center,
  Image,
  HStack,
  InputField,
  Input,
  Link,
  Heading,
  ScrollView,
  FormControl,
  Toast,
  ToastTitle,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  InputSlot,
  InputIcon,
  FormControlHelper,
  LinkText,
  Button,
  ButtonText,
  useToast,
  EyeIcon,
  EyeOffIcon,
  FormControlLabelText,
  FormControlLabel,Divider,ButtonIcon
} from "@/components/ui";
import GuestLayout from "./layouts/GuestLayout";
import { Keyboard,StyleSheet, View } from "react-native";
import { GlobalUser, Organ } from "../global/index";

export const LoginScreen = () => {
  const SignInForm = () => {
    const [validated, setValidated] = useState({
      strUserNO: true,
      password: true,
    });

    const [userInfo, setUserInfo] = useState<GlobalUser>({
      strUserNO: "",
      password: "",
    });
    const toast = useToast();

    const onSubmit = () => {
      // toast.show({
      //   placement: "bottom right",
      //   render: ({ id }) => {
      //     return (
      //       <Toast nativeID={id} variant="outline" action="success">
      //         <ToastTitle>Signed in successfully</ToastTitle>
      //       </Toast>
      //     );
      //   },
      // });
      // Implement your own onSubmit and navigation logic here.
    };

    const handleKeyPress = () => {
      Keyboard.dismiss();
      onSubmit();
    };
    const handBlur = async () => {};

    const [showPassword, setShowPassword] = useState(false);

    const handleState = () => {
      setShowPassword((showState) => {
        return !showState;
      });
    };

    const handleChange = (field: any, value: any) => {
      value === ""
        ? setValidated({ ...validated, [field]: false })
        : setValidated({ ...validated, [field]: true });
      setUserInfo((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    };

    return (
      <>
        <VStack className="w-full justify-between">
          <FormControl isInvalid={!validated.strUserNO} isRequired={true}>
            <Input>
              <InputField
                placeholder="User"
                type="text"
                value={userInfo.strUserNO}
                onChangeText={(value) => handleChange("strUserNO", value)}
                onBlur={handBlur}
                onSubmitEditing={handleKeyPress}
                returnKeyType="done"
              />
            </Input>
            <FormControlError>
              <FormControlErrorIcon size="md" />
              <FormControlErrorText>
                {!validated.strUserNO && "用户名不正确"}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl
            className="mb-6"
            isInvalid={!validated.password}
            isRequired={true}
          >
            <FormControlLabel>
              <FormControlLabelText>{"密码"}</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                placeholder="Password"
                value={userInfo.password}
                onChangeText={(value) => handleChange("password", value)}
                onSubmitEditing={handleKeyPress}
                returnKeyType="done"
                type={showPassword ? "text" : "password"}
              />
              {/* <InputSlot onPress={handleState} className="pr-3">
                <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
              </InputSlot> */}
            </Input>
            <FormControlError>
              <FormControlErrorIcon size="sm" />
              <FormControlErrorText>
                {!validated.password && "密码不正确"}
              </FormControlErrorText>
            </FormControlError>

            <FormControlHelper></FormControlHelper>
          </FormControl>
        </VStack>
        <Link className="ml-auto" href="/forgot-password">
          <LinkText size="xs">Forgot password?</LinkText>
        </Link>
        <Button className="mt-5" variant="solid" size="lg" onPress={onSubmit}>
          <ButtonText size="sm"> SIGN IN</ButtonText>
        </Button>
      </>
    );
  };

  function SideContainerWeb() {
    return (
      <Center className="flex-1 bg-primary-500 dark:bg-primary-500">
        <Image
          className="w-[80px] h-[10px]"
          alt="gluestack-ui Pro"
          resizeMode="contain"
          source={require("./assets/images/gluestackUiProLogo_web_light.svg")}
        />
      </Center>
    );
  }

  function MobileHeader() {
    return (
      <VStack className="px-3 mt-4.5" space="md">
        <HStack space="md" className="items-center">
          <Link href="..">
          </Link>
          <Text className="text-lg">Sign In</Text>
        </HStack>
        <VStack space="xs" className="ml-1 my-4">
          <Heading>Welcome back</Heading>
          <Text className="text-sm font-normal text-primary-300">
            Sign in to continue
          </Text>
        </VStack>
      </VStack>
    );
  }

  const Main = () => {
    return (
      <>
        <Box className="w-full">
          <MobileHeader />
        </Box>
        <Box className="w-full h-full px-4 md:rounded-t-none md:rounded-br-none py-8 flex-1 transparent rounded-t-2xl rounded-br-none">
          <Heading className="hidden mb-8 md:flex md:text-2xl">
            Sign in to continue
          </Heading>
          <SignInForm />
        {/* <HStack className="my-4 items-center justify-center" space="md">
          <Divider className="w-2/6 bg-background-200 dark:bg-background-700"/>
          <Text className="font-medium text-primary-400 dark:text-primary-300">
            or
          </Text>
          <Divider className="w-2/6 bg-background-200 dark:bg-background-700"/>
        </HStack>
        <HStack className="my-6 md:mt-4 mb-9 justify-center items-center"
          space="lg"
        >
            <Link href="">
            <Button action="secondary" variant="link" onPress={() => {}}>
              <ButtonIcon as={FacebookIcon} />
            </Button>
          </Link>
          <Link href="">
            <Button action="secondary" variant="link" onPress={() => {}}>
              <ButtonIcon as={GoogleIcon} />
            </Button>
          </Link>
        </HStack>
        <HStack className="items-center justify-center mt-auto">
          <Text className="font-normal text-primary-500 dark:text-primary-400"
            size="sm"
          >
            Don't have an account?
          </Text>
          <Link href="/signup">
            <LinkText size="sm">Sign up</LinkText>
          </Link>
        </HStack> */}
        </Box>
      </>
    );
  };

  return (
    <GuestLayout>
      {/* <Box className="w-full">
        <SideContainerWeb />
      </Box> */}
      <Main />
    </GuestLayout>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});