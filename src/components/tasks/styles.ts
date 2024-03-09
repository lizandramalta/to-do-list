import { Dimensions, StyleSheet } from "react-native";

export const tasksStyles = StyleSheet.create({
  container: {
    marginTop: 55,
    alignItems: "center",
    width: "100%",
  },
  tasksView: {
    width: "87.2%",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyView: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 48,
  },
  emptyViewImage: {
    marginBottom: 16,
  },
  emptyViewText: {
    fontSize: 14,
    color: "#808080",
  },
  tasksHeaderView: {
    marginBottom: 20,
    width: Dimensions.get("window").width * 0.872,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tasksHeaderTextView: {
    flexDirection: "row",
    alignItems: "center",
  },
  tasksHeaderText: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
  },
  createdTasksText: {
    color: "#4EA8DE",
  },
  doneTasksText: {
    color: "#8284FA",
  },
  countView: {
    marginLeft: 8,
    backgroundColor: "#333333",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 999,
  },
  countText: {
    color: "#D9D9D9",
  },
  taskItemView: {
    flexDirection: "row",
    backgroundColor: "#262626",
    borderRadius: 1,
    borderColor: "#333333",
    paddingVertical: 12,
    paddingRight: 8,
    paddingLeft: 12,
    width: Dimensions.get("window").width * 0.872,
    height: (Dimensions.get("window").height * 64) / 812,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  taskItemText: {
    fontSize: 14,
    color: "#F2F2F2",
    lineHeight: 14 * 1.4,
    flex: 1,
  },
  taskItemTextDone: {
    color: "#808080",
    textDecorationLine: "line-through",
  },
  taskLastItem: {
    marginBottom: (Dimensions.get("window").height * 64) / 1624,
  },
  deleteButtonIcon: {
    color: "#808080",
  },
  deleteButtonOnHover: {
    backgroundColor: "#333333",
    borderRadius: 4,
  },
  deleteButtonOnHoverIcon: {
    color: "#E25858",
  },
  checkButton: {
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    width: 18,
    height: 18,
    marginRight: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  checkButtonOnHover: {
    borderColor: "#1E6F9F",
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  checkButtonDoneTask: {
    borderWidth: 0,
    backgroundColor: "#5E60CE",
  },
  checkButtonDoneTaskOnHover: {
    borderWidth: 0,
    backgroundColor: "#8284FA",
  },
});
