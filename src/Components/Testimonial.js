import React from 'react'


export default function Testimonial({avatar, text, name, job}) {
    return (
        <article className="flex flex-col p-10 space-y-6">
            <div>
                <img className="rounded-full w-20 mx-auto" src={avatar} alt=""/>
            </div>
            <p className="text-dark-grayish-blue font-bold font-barlow">{text}</p>
            <div>
                <span className="font-fraunces">{name}</span>
                <br/>
                <span className="font-barlow text-grayish-blue">{job}</span>
            </div>
        </article>
    )
}
