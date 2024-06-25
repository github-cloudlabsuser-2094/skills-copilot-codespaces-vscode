import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const sentence = 'take a sentence as input';
const reversedSentence = sentence.split(' ').reverse().map((word, index) => {
    if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
}).join(' ');

console.log(reversedSentence);

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;


const data = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 40 }
];
const names = data.map((item) => item.name);
console.log(names);

const nestedNames = data.map((item) => {
    return item.map((nestedItem) => nestedItem.name);
}).flat();
console.log(nestedNames);