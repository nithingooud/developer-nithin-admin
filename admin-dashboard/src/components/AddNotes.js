import React from 'react';
import { Formik, FieldArray, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'flowbite-react';
import axios from 'axios'
import { API_BASE_URL } from '../environment';

const initialValues = {
    name: '',
    title: '',
    subtitle: '',
    description: '',
    contents: [],
    benefits: [],
    previewImages: [],
    cost: '',
    whatsAppLink: ''
};

const NoteBooks = {
    Java: 'Java',
    Python: 'Python'
}

const AddNotes = () => {

    const handleSubmit = async (values) => {
        try {
            console.log(values)
            const response = await axios.post(`${API_BASE_URL}/upload-notes`, values);
            if (response.status == 200) {
                alert("Notes submitted successfully");

                values = {
                    name: '',
                    title: '',
                    subtitle: '',
                    description: '',
                    contents: [],
                    benefits: [],
                    previewImages: [],
                    cost: '',
                    whatsAppLink: ''
                }
            }
        }
        catch (error) {
            console.error('Error adding job:', error);
        }
        finally {
        }
    };

    return (
        <div className="container mx-auto mt-8 mb-4">
            <h1 className="text-xl font-semibold mb-4 mt-4">Create a New Notes</h1>
            <Formik
                initialValues={initialValues}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-medium">Name</label>
                            <Field
                                name="name"
                                type="text"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                            <ErrorMessage name="name" component="p" className="text-red-600" />

                        </div>
                        <div className="mb-4">
                            <label htmlFor="title" className="block font-medium">Title</label>
                            <Field
                                name="title"
                                type="text"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                            <ErrorMessage name="title" component="p" className="text-red-600" />

                        </div>
                        <div className="mb-4">
                            <label htmlFor="whatsAppLink" className="block font-medium">whatsApp Link</label>
                            <Field
                                name="whatsAppLink"
                                type="text"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                            <ErrorMessage name="whatsAppLink" component="p" className="text-red-600" />

                        </div>
                        <div className="mb-4">
                            <label htmlFor="subtitle" className="block font-medium">Sub Title</label>
                            <Field
                                name="subTitle"
                                type="text"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                            <ErrorMessage name="subTitle" component="p" className="text-red-600" />

                        </div>
                        <div className="mb-4">
                            <label htmlFor="cost" className="block font-medium">cost</label>
                            <Field
                                name="cost"
                                type="text"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                            <ErrorMessage name="cost" component="p" className="text-red-600" />

                        </div>
                        <div className="mb-4">
                            <label htmlFor="contents" className="block font-medium">Contents</label>
                            <FieldArray name="contents">
                                {({ push, remove }) => (
                                    <div>
                                        {values.contents.map((skill, index) => (
                                            <div key={index} className="flex items-center mb-2">
                                                <Field
                                                    name={`contents[${index}]`}
                                                    type="text"
                                                    className="mr-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                />
                                                {index > 0 && (
                                                    <button type="button" onClick={() => remove(index)} className="text-red-600 focus:outline-none">Remove</button>
                                                )}
                                            </div>
                                        ))}
                                        <button type="button" onClick={() => push('')} className="text-green-600 focus:outline-none">Add Contents</button>
                                    </div>
                                )}
                            </FieldArray>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="benefits" className="block font-medium">Benefits</label>
                            <FieldArray name="benefits">
                                {({ push, remove }) => (
                                    <div>
                                        {values.benefits.map((skill, index) => (
                                            <div key={index} className="flex items-center mb-2">
                                                <Field
                                                    name={`benefits[${index}]`}
                                                    type="text"
                                                    className="mr-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                />
                                                {index > 0 && (
                                                    <button type="button" onClick={() => remove(index)} className="text-red-600 focus:outline-none">Remove</button>
                                                )}
                                            </div>
                                        ))}
                                        <button type="button" onClick={() => push('')} className="text-green-600 focus:outline-none">Add Benefits</button>
                                    </div>
                                )}
                            </FieldArray>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="previewImages" className="block font-medium">Preview Images</label>
                            <FieldArray name="previewImages">
                                {({ push, remove }) => (
                                    <div>
                                        {values.previewImages.map((skill, index) => (
                                            <div key={index} className="flex items-center mb-2">
                                                <Field
                                                    name={`previewImages[${index}]`}
                                                    type="text"
                                                    className="mr-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                />
                                                {index > 0 && (
                                                    <button type="button" onClick={() => remove(index)} className="text-red-600 focus:outline-none">Remove</button>
                                                )}
                                            </div>
                                        ))}
                                        <button type="button" onClick={() => push('')} className="text-green-600 focus:outline-none">Add Preview Images</button>
                                    </div>
                                )}
                            </FieldArray>
                        </div>

                        <Button type='submit'>Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddNotes;
