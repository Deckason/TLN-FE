'use client'
import React from 'react';
import DOMPurify from 'dompurify';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaShareAlt } from 'react-icons/fa';
import Image from 'next/image';
import RelatedArticles from '../../../../Components/BlogComp/RelatedArticles';
import BreadCrumbs from '../../../../Components/BlogComp/BreadCrumbs';
import blogImg from '../../../../Assets/Blogs/blogPlaceholder.png';

const blogData = {
    title: "How to learn a new language",
    author: "Aisha Jain",
    date: "July 7, 2024",
    imageUrl: blogImg.src, 
    htmlContent: "<p>Lorem ipsum dolor sit amet...</p>" 
};
const sampleArticles = [
    {
        image: blogImg.src,
        title: 'How to learn a new language',
        authorName: 'Zaira Jain',
        authorImage: blogImg.src,
        description: 'Lorem ipsum dolor sit amet consectetur. Leo interdum sagittis vel nunc...',
    },
];

const BlogPage = ({ blogContent = blogData }) => {
    const sanitizedContent = DOMPurify.sanitize(blogContent.htmlContent);

    return (
        <div className="p-4 sm:p-6 lg:px-24 lg:py-12">
            {/* Breadcrumbs */}
            <BreadCrumbs items={["French", "Travel and Exploration"]} />

            {/* Title and Author Section */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {blogContent.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="flex items-center text-gray-600 text-xs sm:text-sm gap-2 mb-4">
                    <Image
                        src={blogImg}
                        alt={"blog specific"}
                        className="w-8 h-8 rounded-full mr-2"
                        width={32}
                        height={32}
                    />
                    <span>{blogContent.author}</span>
                    <span>|</span>
                    <span>{blogContent.date}</span>
                </div>

                {/* Social Share Icons */}
                <div className="flex gap-4 mb-6 text-primary-color">
                    <FaShareAlt size={20} className="hover:text-blue-600 cursor-pointer" />
                    <FaFacebook size={20} className="hover:text-blue-600 cursor-pointer" />
                    <FaTwitter size={20} className="hover:text-blue-400 cursor-pointer" />
                    <FaInstagram size={20} className="hover:text-pink-500 cursor-pointer" />
                    <FaLinkedin size={20} className="hover:text-blue-700 cursor-pointer" />
                </div>
            </div>

            {/* Blog Image */}
            <div className="mb-6">
                <Image 
                    src={blogContent.imageUrl} 
                    alt="Blog Image" 
                    width={700} 
                    height={400} 
                    className="rounded-md w-full object-cover" 
                />
            </div>

            {/* Blog Content */}
            <div 
                className="prose prose-sm sm:prose lg:prose-lg max-w-full"
                dangerouslySetInnerHTML={{ __html: sanitizedContent }} 
            />

            {/* Related Articles Section */}
            <RelatedArticles articles={sampleArticles} />
        </div>
    );
};

export default BlogPage;
