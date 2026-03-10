'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function AIChat({ isOpen, onClose, initialMessage }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen && chatRef.current) {
      gsap.fromTo(
        chatRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      );
    }
  }, { dependencies: [isOpen] });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (initialMessage && messages.length === 0) {
      handleSendMessage(initialMessage);
    }
  }, [initialMessage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simuliere AI Antwort (hier später echte AI Integration)
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Vielen Dank für Ihre Nachricht! Ich bin der wooms AI-Assistent und helfe Ihnen gerne weiter. Wie kann ich Sie bei Ihrem Warehouse Management unterstützen?',
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        ref={chatRef}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-[900px] h-[80vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#01182D] px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-[#D1B06B] rounded-full animate-pulse"></div>
            <div>
              <h2 className="text-[24px] font-light !text-[#F5F2ED]">wooms AI Assistent</h2>
              <p className="text-[14px] font-light text-[#F5F2ED]/60">Immer für Sie da</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full border-2 border-white/20 hover:border-white/40 flex items-center justify-center transition-all"
          >
            <X size={24} className="text-white" strokeWidth={1.5} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
          {messages.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center max-w-md">
                <h3 className="text-[28px] font-light text-[#01182D] mb-4">
                  Hallo! Wie kann ich helfen?
                </h3>
                <p className="text-[16px] font-light text-[#01182D]/60">
                  Stellen Sie mir Fragen zu wooms WMS, unseren Funktionen oder vereinbaren Sie einen Demo-Termin.
                </p>
              </div>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-6 py-4 ${
                  message.sender === 'user'
                    ? 'bg-[#01182D] text-white'
                    : 'bg-[#F5F2ED] text-[#01182D]'
                }`}
              >
                <p className="text-[16px] font-light leading-relaxed">{message.text}</p>
                <p className={`text-[12px] mt-2 ${
                  message.sender === 'user' ? 'text-white/50' : 'text-[#01182D]/50'
                }`}>
                  {message.timestamp.toLocaleTimeString('de-DE', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[#F5F2ED] text-[#01182D] rounded-2xl px-6 py-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-[#01182D]/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-[#01182D]/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-[#01182D]/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-100 px-8 py-6">
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ihre Nachricht..."
              className="flex-1 bg-[#F5F2ED] rounded-full px-6 py-4 text-[16px] font-light text-[#01182D] placeholder:text-[#01182D]/40 focus:outline-none focus:ring-2 focus:ring-[#D1B06B]"
              autoFocus
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim()}
              className="w-14 h-14 rounded-full bg-[#01182D] hover:bg-[#D1B06B] disabled:opacity-30 disabled:hover:bg-[#01182D] flex items-center justify-center transition-all"
            >
              <Send size={20} className="text-white" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
