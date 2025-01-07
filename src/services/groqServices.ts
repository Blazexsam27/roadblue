import { JsonOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatGroq } from "@langchain/groq";

interface OutputData {
  id: string;
  data: { label: string };
  position: { x: number; y: number };
  type: string;
}

class GroqServices {
  groq = new ChatGroq({
    model: "llama-3.3-70b-versatile",
    temperature: 0.45,
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
  });

  parser = new JsonOutputParser<OutputData>();

  async main(searchTerm: string): Promise<Object | null> {
    const chatCompletion = await this.getGroqChatCompletion(searchTerm);

    return chatCompletion;
  }

  async getGroqChatCompletion(searchTerm: string) {
    const prompt = ChatPromptTemplate.fromTemplate(
      "Answer the user query.\n{format_instructions}\n{query}\n"
    );

    const formatInstructions = `
      Important Rules:
      1. The output must be a valid JSON (not an explanation).
      2. The "label" inside the "data" property should represent a topic in the roadmap.
      3. The "children" property should be an array of strings representing subtopics.
      4. The resourceUrl property should be an array of strings representing URLs which can be used to learn the topics (No need to give subroutes, just main website route), If in case url is not present suggest books, If in case both of them not present simply fill null.
      5. You must always return valid json fenced by a markdown code block. Do not return any additional text.

      Provide a long learning roadmap from basic to advance topics and subtopics for ${searchTerm},  as a valid JavaScript array of objects in the following format:
     [
          {
              data: { 
                label: "Syntax",
                children: ["Variables", "Data Types", "Operators", "Control Structures"]
                resourceUrl: [
                  "https://javatpoint.com",
                    "https://geeksforgeeks.com",
                ]
                },
          },
          {
              data: { 
                label: "Methods",
                children: ["Built-in", "User-defined"],
                  resourceUrl: [
                  "https://w3school.com",
                  "https://geeksforgeeks.com",
                ]
               },
          }
      ]

      `;

    const partialedPrompt = await prompt.partial({
      format_instructions: formatInstructions,
    });

    try {
      const chain = partialedPrompt.pipe(this.groq).pipe(this.parser);
      const result = await chain.invoke({
        query: "Generate the proper output",
      });
      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new GroqServices();
