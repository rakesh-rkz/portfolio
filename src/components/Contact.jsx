import React, { useState } from 'react'
import Title from './Title'

export const Contact = () => {

    const [alert, setAlert] = useState({
        isEnable: false,
        message: "",
        type: ""
    })

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const onSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
            setAlert({
                isEnable: true,
                message: "Invalid email address",
                type: "error"
            })
            setTimeout(() => {
                setAlert({
                    isEnable: false,
                    message: "",
                    type: ""
                })
            }, 2000);
            return;
        }

        if (formData.name !== "" || formData.email !== "" || formData.message !== "") {
            setAlert({
                isEnable: true,
                message: "Message Sent Successfully",
                type: "success"
            })
            setTimeout(() => {
                setAlert({
                    isEnable: false,
                    message: "",
                    type: ""
                })
            }, 2000);
        } else {
            setAlert({
                isEnable: true,
                message: "Invalid",
                type: "error"
            })
            setTimeout(() => {
                setAlert({
                    isEnable: false,
                    message: "",
                    type: ""
                })
            }, 2000);
        }
    }

    const onFormChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }

    return (
        <section id="Contact">
            <Title name={"Contact"} />
            <>
                <>
                    {alert.isEnable &&
                        <div className="toast toast-center toast-top z-50">
                            <div className={`alert alert-${alert.type}`}>
                                <span>{alert.message}</span>
                            </div>
                        </div>
                    }
                </>
                <div className="max-w-lg mx-auto  p-8 ">
                    <form className="space-y-6">
                        <div className="relative">
                            <div className="flex items-center border border-secondary rounded-lg p-3  focus-within:ring-2 focus-within:ring-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-5 w-5 text-gray-400">
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input
                                    onChange={onFormChange}
                                    value={formData.email}
                                    name='email'
                                    type="email"
                                    className="ml-2 w-full bg-transparent outline-none  placeholder-gray-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex items-center border border-secondary rounded-lg p-3 focus-within:ring-2 focus-within:ring-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-5 w-5 text-gray-400">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input
                                    onChange={onFormChange}
                                    value={formData.name}
                                    name='name'
                                    type="text"
                                    className="ml-2 w-full bg-transparent outline-none  placeholder-gray-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <textarea
                                name='message'
                                onChange={onFormChange}
                                value={formData.message}
                                className="w-full p-3 border border-secondary rounded-lg  bg-transparent placeholder-gray-500 focus:ring-2 focus:ring-secondary"
                                rows="4"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <button
                            className="w-full bg-secondary text-secondary-content font-semibold py-3 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-secondary"
                            onClick={onSubmit}
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </>
        </section>
    )
}
