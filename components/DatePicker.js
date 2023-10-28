import React, { useState } from "react";
import { View, TextInput, Icon, DateTimePicker } from "react-native";

export default function DatePickerInput({ userData, setUserData }){
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDatePickerChange = (date) => {
    setUserData({ ...userData, birthdate: date });
  };

  return (
    <View>
      <View>
        <Icon
          name="calendar"
          onPress={() => setShowDatePicker(true)}
          style={{ marginRight: 10 }}
        />
        <TextInput
          style={{ marginLeft: 10, width: 300 }}
          placeholder="MM/DD/YY"
          value={userData.birthdate}
          onChangeText={(text) => setUserData({ ...userData, birthdate: text })}
        />
      </View>
      <DateTimePicker
        modalVisible={showDatePicker}
        onDateChange={handleDatePickerChange}
        onCancel={() => setShowDatePicker(false)}
      />
    </View>
  );
};
