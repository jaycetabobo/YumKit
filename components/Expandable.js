import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet} from "react-native";

const ExpandableText = ({ titles, text, headerText }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleExpanded}>
        <Text style={styles.contentBottom2}>{headerText}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.expand}>
          {titles.map((title) => (
            <Text key={title} style={styles.title}>
              {title}
            </Text>
          ))}
          <Text>{text}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    contentBottom2:{
        marginHorizontal: 5,
        fontFamily: 'glacialindibold',
        fontSize: 20,
        marginVertical: 10
      },
      expand:{
        flexDirection: "column",
        backgroundColor: '#D1EEFE',
        marginHorizontal: 20,
        borderRadius: 10
      },
      title:{
        marginHorizontal: 10,
        marginVertical: 5,
        fontFamily: 'glacialindi',
        fontSize: 15
      }
});

export default ExpandableText;