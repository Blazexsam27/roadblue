import { createSlice } from "@reduxjs/toolkit";

export const groqSlice = createSlice({
  name: "groq",
  initialState: {
    roadMap: [
      {
        data: {
          label: "Introduction to Database Management Systems",
          children: ["What is DBMS", "History of DBMS", "Importance of DBMS"],
          resourceUrl: [
            "https://www.geeksforgeeks.org/introduction-to-dbms/",
            "https://www.tutorialspoint.com/dbms/index.htm",
          ],
        },
      },
      {
        data: {
          label: "Database Models",
          children: [
            "Relational Model",
            "Hierarchical Model",
            "Network Model",
            "Object-Oriented Model",
          ],
          resourceUrl: [
            "https://www.javatpoint.com/dbms-database-models",
            "https://www.tutorialspoint.com/dbms/dbms_database_models.htm",
          ],
        },
      },
      {
        data: {
          label: "Database Design",
          children: [
            "Entity-Relationship Model",
            "Normalization",
            "Denormalization",
          ],
          resourceUrl: [
            "https://www.geeksforgeeks.org/database-design-normalization/",
            "https://www.tutorialspoint.com/dbms/dbms_database_design.htm",
          ],
        },
      },
      {
        data: {
          label: "Relational Database Management Systems",
          children: [
            "Introduction to RDBMS",
            "RDBMS Concepts",
            "RDBMS Advantages and Disadvantages",
          ],
          resourceUrl: [
            "https://www.javatpoint.com/rdbms",
            "https://www.tutorialspoint.com/rdbms/index.htm",
          ],
        },
      },
      {
        data: {
          label: "SQL",
          children: [
            "SQL Syntax",
            "SQL Queries",
            "SQL Functions",
            "SQL Subqueries",
          ],
          resourceUrl: [
            "https://www.w3schools.com/sql/",
            "https://www.tutorialspoint.com/sql/index.htm",
          ],
        },
      },
      {
        data: {
          label: "Database Security",
          children: [
            "Introduction to Database Security",
            "Database Security Threats",
            "Database Security Measures",
          ],
          resourceUrl: [
            "https://www.geeksforgeeks.org/database-security/",
            "https://www.tutorialspoint.com/dbms/dbms_security.htm",
          ],
        },
      },
      {
        data: {
          label: "Database Backup and Recovery",
          children: [
            "Introduction to Database Backup and Recovery",
            "Database Backup Types",
            "Database Recovery Types",
          ],
          resourceUrl: [
            "https://www.javatpoint.com/dbms-backup-and-recovery",
            "https://www.tutorialspoint.com/dbms/dbms_backup_and_recovery.htm",
          ],
        },
      },
      {
        data: {
          label: "Database Performance Tuning",
          children: [
            "Introduction to Database Performance Tuning",
            "Database Performance Tuning Techniques",
          ],
          resourceUrl: [
            "https://www.geeksforgeeks.org/database-performance-tuning/",
            "https://www.tutorialspoint.com/dbms/dbms_performance_tuning.htm",
          ],
        },
      },
      {
        data: {
          label: "NoSQL Database Management Systems",
          children: [
            "Introduction to NoSQL DBMS",
            "NoSQL DBMS Types",
            "NoSQL DBMS Advantages and Disadvantages",
          ],
          resourceUrl: [
            "https://www.javatpoint.com/nosql",
            "https://www.tutorialspoint.com/nosql/index.htm",
          ],
        },
      },
      {
        data: {
          label: "Cloud Database Management Systems",
          children: [
            "Introduction to Cloud DBMS",
            "Cloud DBMS Types",
            "Cloud DBMS Advantages and Disadvantages",
          ],
          resourceUrl: [
            "https://www.geeksforgeeks.org/cloud-database-management-systems/",
            "https://www.tutorialspoint.com/cloud_dbms/index.htm",
          ],
        },
      },
      {
        data: {
          label: "Database Administration",
          children: [
            "Introduction to Database Administration",
            "Database Administration Tasks",
          ],
          resourceUrl: [
            "https://www.javatpoint.com/dbms-administration",
            "https://www.tutorialspoint.com/dbms/dbms_administration.htm",
          ],
        },
      },
      {
        data: {
          label: "Advanced Database Topics",
          children: ["Data Mining", "Data Warehousing", "Big Data"],
          resourceUrl: [
            "https://www.geeksforgeeks.org/advanced-database-topics/",
            "https://www.tutorialspoint.com/dbms/dbms_advanced_topics.htm",
          ],
        },
      },
    ],
  },

  reducers: {
    setRoadMap: (state, action) => {
      state.roadMap = action.payload;
    },
  },
});

export const { setRoadMap } = groqSlice.actions;

export default groqSlice.reducer;
