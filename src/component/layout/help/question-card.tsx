import React, { useState } from "react";
import { TouchableOpacity, View, Text, Switch, StyleSheet } from "react-native";

function QuestionCard(props: any) {
  const [showContent, setShowContent] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setShowContent(!showContent)}>
      <View style={styles.cardContainer}>
        <View style={styles.rowTextContainer}>
          <Text style={styles.boldText}>{props.title}</Text>
        </View>
        { showContent &&
          <View style={styles.rowTextContainer}>
            <Text>{props.content}</Text>
          </View>
        }
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 15,
    paddingBottom: 15,
    width: '90%',
    borderColor: '#e2e2e2',
    borderBottomWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fdfdfd'
  },
  rowTextContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  container: {
    width: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  dateText: {
    color: '#c0c0c0'
  }
})

export default QuestionCard;