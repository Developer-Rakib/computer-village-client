import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import './Blogs.css';
import { BsQuestionDiamondFill } from 'react-icons/bs'

const Blogs = () => {
    return (
        
        <div className='mt-[66px]'>

            <h2 className="text-3xl sm:text-5xl py-8">Question & Answer</h2>
            <Accordion className='blog-contaner'>

                {/* <Fade top> */}
                    <AccordionItem className='blog'>
                        <AccordionItemHeading className=''>
                            <AccordionItemButton>
                                <h4 className=''><BsQuestionDiamondFill className='mx-2'></BsQuestionDiamondFill> What is The Different Between JavaScript And NodeJS?</h4>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='blog-ans'>
                                <p><strong className='border-b-2 border-gray-700 pt-5'>JavaScript</strong>:  Javascript is a programming language that is used for writing scripts on the website. It is basically used on the client-side. It is capable enough to add HTML and play with the DOM. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. It is the upgraded version of ECMA scrip that uses Chrome’s V8 engine written in C++. Some of the javascript frameworks are RamdaJS, TypedJS, etc.</p>
                                <p><strong className='border-b-2 border-gray-700'>NodeJs</strong>:  NodeJS is a Javascript runtime environment. It is mostly used on the server-side. Nodejs does not have capability to add HTML tags. V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs is written in C, C++ and Javascript. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                {/* </Fade>

                <Fade left> */}
                    <AccordionItem className='blog'>
                        <AccordionItemHeading className=''>
                            <AccordionItemButton>
                                <h4 className=''><BsQuestionDiamondFill className='mx-2'></BsQuestionDiamondFill> When Should We Use NodeJS? And When Should We Use MongoDB??</h4>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='blog-ans'>
                                <p><strong className='border-b-2 border-gray-700 pt-5'>NodeJS</strong>:  My judgment is that Node.js is especially suitable for applications where you want to maintain an endless connection to the server from the browser. Using a technique known as "long-polling" you can write an application that sends updates to the user in real time. Prolonged polling on many web giants like Ruby on Rails or Django will create a lot of load on the server, because every active client eats a server process. This situation amounts to a tarpit attack. When you use something like Node.js, there is no need to maintain a separate thread for each open connection to the server.
                                    It is worth mentioning that Node.js is also great for situations where you will have to reuse a lot of code across client / server gaps. The Meteor Framework makes it really easy and many people are suggesting that it could be the future of web development. I can tell you from experience that it's a lot of fun to write code in Meteor, and a big part of it is that you spend less time thinking about how you're going to restructure your data, so that the code running in the browser can easily manipulate it and pass it back..</p>
                                <p><strong className='border-b-2 border-gray-700'>MongoDB</strong>:  :NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn’t fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.
                                    MongoDB is the most popular of the new breed of non-relational NoSQL databases. Specifically, it’s a document database, also called a document-oriented database or a document store.
                                    Documents hold semistructured data, usually represented in a format like JSON or XML, and each document is associated with a unique key.
                                    Key values are typically a path or a URI that can be used to retrieve the associated document from the database.
                                    The keys are indexed, making it efficient to retrieve the associated documents. .</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                {/* </Fade> */}

                {/* <Fade right> */}
                    <AccordionItem className='blog'>
                        <AccordionItemHeading className=''>
                            <AccordionItemButton>
                                <h4 className=''><BsQuestionDiamondFill className='mx-2'></BsQuestionDiamondFill> What is The Different Between SQL And NoSQL?</h4>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='blog-ans'>
                                <p><strong className='border-b-2 border-gray-700 pt-5'>SQL</strong>:  SQL databases are primarily called as Relational Databases (RDBMS). SQL databases defines and manipulates data based structured query language (SQL). In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. SQL databases are table-based. SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability). Great support is available for all SQL database from their vendors. Also a lot of independent consultations are there who can help you with SQL database for a very large scale deployments.</p>
                                <p><strong className='border-b-2 border-gray-700'>No SQL</strong>:  NoSQL database are primarily called as non-relational or distributed database. A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. NoSQL databases are horizontally scalable. NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. The NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). NoSQL database you still have to rely on community support and only limited outside experts are available for setting up and deploying your large scale NoSQL deployments.</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                {/* </Fade>

                <Fade bottom> */}
                    <AccordionItem className='blog'>
                        <AccordionItemHeading className=''>
                            <AccordionItemButton>
                                <h4 className=''><BsQuestionDiamondFill className='mx-2'></BsQuestionDiamondFill> What is The Purpose of JWT? How dose Work JWT?</h4>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='blog-ans'>
                                <p><strong className='border-b-2 border-gray-700 pt-5'>JWT</strong>:  JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
                                <p><strong className='border-b-2 border-gray-700'>How JWT Work</strong>:  JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings: The header, The payload And The signature. The JOSE (JSON Object Signing and Encryption) header contains the type of token JWT in this case and the signing algorithm.</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                {/* </Fade> */}



            </Accordion>
        </div>
    );
};

export default Blogs;