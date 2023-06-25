import { useRouter } from "expo-router";
import { ScrollView } from "react-native";
import { Button, Card, useTheme, TextInput } from "react-native-paper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PersonalInfoSchema,
  PersonalInfo,
} from "../../src/schema/checkout.schema";

import ControlledInput from "../../src/components/ControlledInput";
import { useCheckoutContext } from "../../src/contexts/CheckoutContext";

export default function PersonalDetails() {
  const { control, handleSubmit } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });

  const { setPersonal } = useCheckoutContext();

  const router = useRouter();
  const theme = useTheme();

  const nextPage = (data: PersonalInfo) => {
    setPersonal(data);

    router.push("/checkout/delivery");
  };

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 15,
        maxWidth: 500,
        width: "100%",
        alignSelf: "center",
      }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Personal information" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 20 }}>
          <ControlledInput
            control={control}
            name="name"
            placeholder="Full Name"
            label="Full Name"
          />

          <ControlledInput
            control={control}
            name="email"
            placeholder="yourmail@gmail.com"
            label="Email"
          />

          <ControlledInput
            control={control}
            name="password"
            label="Password"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
          />
          <ControlledInput
            control={control}
            name="confirmPassword"
            label="ConfirmPassword"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
          />
        </Card.Content>
      </Card>
      <Button
        onPress={handleSubmit(nextPage)}
        mode="contained"
        buttonColor="#06560a"
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        Next
      </Button>
    </ScrollView>
  );
}
