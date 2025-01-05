import { createSlice } from "@reduxjs/toolkit";

export const groqSlice = createSlice({
  name: "groq",
  initialState: {
    // roadMap: [
    //   {
    //     data: {
    //       label: "Introduction",
    //       children: ["History", "Features", "Advantages"],
    //     },
    //   },
    //   {
    //     data: {
    //       label: "Syntax",
    //       children: [
    //         "Variables",
    //         "Data Types",
    //         "Operators",
    //         "Control Structures",
    //       ],
    //     },
    //   },
    //   {
    //     data: {
    //       label: "Functions",
    //       children: ["Built-in", "User-defined", "Lambda", "Higher-Order"],
    //     },
    //   },
    //   {
    //     data: {
    //       label: "Data Structures",
    //       children: [
    //         "Arrays",
    //         "Linked Lists",
    //         "Stacks",
    //         "Queues",
    //         "Trees",
    //         "Graphs",
    //       ],
    //     },
    //   },
    //   {
    //     data: {
    //       label: "Object-Oriented Programming",
    //       children: [
    //         "Classes",
    //         "Objects",
    //         "Inheritance",
    //         "Polymorphism",
    //         "Encapsulation",
    //       ],
    //     },
    //   },
    //   {
    //     data: {
    //       label: "File Input/Output",
    //       children: ["Reading", "Writing", "Exceptions"],
    //     },
    //   },
    //   {
    //     data: {
    //       label: "Error Handling",
    //       children: ["Try-Catch", "Throw", "Finally"],
    //     },
    //   },
    //   {
    //     data: {
    //       label: "Regular Expressions",
    //       children: ["Patterns", "Matching", "Groups", "Modifiers"],
    //     },
    //   },
    //   {
    //     data: {
    //       label: "Networking",
    //       children: ["Sockets", "TCP/IP", "HTTP", "FTP"],
    //     },
    //   },
    //   {
    //     data: {
    //       label: "Database Interaction",
    //       children: ["SQL", "NoSQL", "MongoDB", "MySQL"],
    //     },
    //   },
    //   {
    //     data: {
    //       label: "Web Development",
    //       children: ["Front-end", "Back-end", "Full-stack", "Frameworks"],
    //     },
    //   },
    //   {
    //     data: {
    //       label: "Machine Learning",
    //       children: [
    //         "Supervised",
    //         "Unsupervised",
    //         "Reinforcement",
    //         "Deep Learning",
    //       ],
    //     },
    //   },
    //   {
    //     data: {
    //       label: "Advanced Topics",
    //       children: ["Concurrency", "Parallelism", "Async/Await", "Generators"],
    //     },
    //   },
    // ],
    roadMap: [],
  },

  reducers: {
    setRoadMap: (state, action) => {
      state.roadMap = action.payload;
    },
  },
});

export const { setRoadMap } = groqSlice.actions;

export default groqSlice.reducer;
