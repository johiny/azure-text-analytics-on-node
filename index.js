// import de librerias no olvides hacer un npm install
import PromptSync from "prompt-sync";
import { TextAnalyticsClient, AzureKeyCredential } from "@azure/ai-text-analytics"

// coloca tu endpoint y key del recurso
const ENDPOINT = ""
const TEXT_ANALYTICS_API_KEY = "";

// se instancia el cleinte de azure y el cliente para recibir input por la consola
const client = new TextAnalyticsClient(ENDPOINT, new AzureKeyCredential(TEXT_ANALYTICS_API_KEY));
const prompt = PromptSync()

// se hacen las preguntas por la consola
const TEXT_TO_ANALYZE = prompt('Enter your text to analyze: ');
const TEXT_LANGUAGE = prompt('Enter the text language in the short way example:(en, es): ');

// se crea el array de documentos que necesita el metodo
const documents = [
  TEXT_TO_ANALYZE
];

// se llama al metodo y se imprime la respuesta
let response = client.extractKeyPhrases(documents, TEXT_LANGUAGE)
console.log(response)