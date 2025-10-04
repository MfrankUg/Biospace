import { ChatInterface } from "@/components/chat/chat-interface";

export default function ChatPage() {
    return (
        <div className="container mx-auto px-4 py-8 flex flex-col h-[calc(100vh-4rem)]">
             <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-primary">BioAI Assistant</h1>
                <p className="mt-2 text-lg text-muted-foreground">
                Ask questions about NASA's space biology research.
                </p>
            </div>
            <ChatInterface />
        </div>
    )
}
