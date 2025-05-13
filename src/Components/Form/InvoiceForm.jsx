import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Document, Page, pdfjs } from 'react-pdf';
import './InvoiceForm.css';
import Header from '../Header/Header';
import ReactLogo from '../../assets/react.svg';
import PriceToggle from '../PriceToggle/PriceToggle';
import downloadLogo from '../../assets/download.png';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function InvoiceForm({ isLoggedIn, setIsLoggedIn }) {
    const [file, setFile] = useState(null);


    const dummyData = {
        poNumber: 'PO12345',
        vendor: 'Vendor A',
        invoiceNumber: 'INV789',
        invoiceDate: '2024-06-30',
        totalAmount: 1500,
        paymentTerms: 'Net 30',
        invoiceDueDate: '2024-07-30',
        glPostDate: '2024-06-30',
        invoiceDescription: 'Monthly services',
        lineAmount: 1500,
        department: 'Finance',
        account: 'Account A',
        location: 'New York',
        expenseDescription: 'Consulting Fees',
        comment: ''
    };
    const [formValues, setFormValues] = useState(dummyData);


    const validationSchema = Yup.object({
        poNumber: Yup.string().required('Required'),
        invoiceNumber: Yup.string().required('Required'),
        totalAmount: Yup.number().required('Required').min(0),
        invoiceDate: Yup.date().required('Required'),
        invoiceDueDate: Yup.date().required('Required'),
        glPostDate: Yup.date().required('Required'),
        invoiceDescription: Yup.string().required('Required'),
        lineAmount: Yup.number().required('Required').min(0),
        department: Yup.string().required('Required'),
        account: Yup.string().required('Required'),
        location: Yup.string().required('Required'),
        expenseDescription: Yup.string().required('Required'),
    });

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile && uploadedFile.type === 'application/pdf') {
            setFile(uploadedFile);
        }
    };

    const fillWithDummyData = () => {
        setFormValues(dummyData);
    };


    return (
        <div style={{ background: "#f5f5f5" }}>
            <Header InvoiceForm={InvoiceForm} setIsLoggedIn={setIsLoggedIn} fillWithDummyData={fillWithDummyData} />
            <div className="container">
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <div className="upload-section">
                        <p className="mb-2 font-bold">Upload Your Invoice</p>
                        <p className="text-sm text-gray-500 mb-4">To auto-populate fields and save time</p>
                        <img src={downloadLogo} alt="Logo" className="upload-file-image" />
                        <label className="upload-btn">
                            Upload File
                            <input
                                type="file"
                                onChange={handleFileUpload}
                                accept="application/pdf"
                                style={{ display: 'none' }}
                            />
                        </label>
                        <p className="text-sm text-gray-500 mb-4">Click to upload</p>

                        {file && (
                            <Document file={file}>
                                <Page pageNumber={1} />
                            </Document>
                        )}
                    </div>
                </div>

                <Formik
                    initialValues={formValues}
                    enableReinitialize
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        const existingData = JSON.parse(localStorage.getItem('submittedInvoices')) || [];
                        const newData = [...existingData, values];
                        localStorage.setItem('submittedInvoices', JSON.stringify(newData));
                        alert('Form submitted & saved to local storage!');
                        resetForm();
                    }}
                >
                    {({ handleSubmit }) => (
                        <Form className="form-section">
                            {/* VENDOR DETAILS */}
                            <div className="section-card">
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                                    <img src={ReactLogo} alt="Logo" className="hello" />
                                    <div className="section-title" id="vendor-details">Vendor Details</div>
                                </div>
                                <div className="field">
                                    <div className='vendor-heading'>Vendor Information</div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                        <label>Vendor&nbsp;<span style={{ color: "red" }}>*</span></label>
                                        <Field as="select" name="vendor" className="input-vendor">
                                            <option value="">Select Vendor</option>
                                            <option value="A-1 Exterminators">A - 1 Exterminators</option>
                                            <option value="Vendor 2">Vendor 2</option>
                                        </Field>
                                        <div className='texting'>350 Main St, Lynn</div>
                                    </div>
                                    <div className='view-vendor-details'>→ View Vendor Details</div>
                                </div>
                            </div>

                            {/* INVOICE DETAILS */}
                            <div className="section-card">
                                <div className="section-header">
                                    <img src={ReactLogo} alt="Logo" className="hello" />
                                    <div className="section-title" id="invoice-details">Invoice Details</div>
                                </div>
                                <div className='vendor-heading'>General Information</div>
                                <div className="field">
                                    <label>Purchase Order Number&nbsp;<span style={{ color: "red" }}>*</span></label>
                                    <Field name="poNumber" as="select" className="input">
                                        <option value="">Select PO Number</option>
                                        <option value="PO-2025-001">PO-2025-001</option>
                                        <option value="PO-2025-002">PO-2025-002</option>
                                    </Field>
                                    <ErrorMessage name="poNumber" component="div" className="error" />
                                </div>
                                <div className="sub-section-card">
                                    <div className="field">
                                        <label>Invoice Number&nbsp;<span style={{ color: "red" }}>*</span></label>
                                        <Field name="invoiceNumber" as="select" className="input">
                                            <option value="">Select Invoice</option>
                                            <option value="INV-2025-001">INV-2025-001</option>
                                            <option value="INV-2025-002">INV-2025-002</option>
                                        </Field>
                                        <ErrorMessage name="invoiceNumber" component="div" className="error" />
                                    </div>
                                    <div className="field">
                                        <label>Invoice Date&nbsp;<span style={{ color: "red" }}>*</span></label>
                                        <Field name="invoiceDate" type="date" className="input" />
                                    </div>
                                    <div className="field" style={{ position: "relative" }}>
                                        <label>Total Amount&nbsp;<span style={{ color: "red" }}>*</span></label>
                                        <span className="currency-symbol">$</span>
                                        <Field
                                            name="totalAmount"
                                            type="number"
                                            className="input"
                                            style={{ paddingLeft: "30px" }}
                                        />
                                    </div>
                                    <div className="field">
                                        <label>Payment Terms&nbsp;<span style={{ color: "red" }}>*</span></label>
                                        <Field name="paymentTerms" as="select" className="input">
                                            <option value="">Select Payment Terms</option>
                                            <option value="Net 15">Net 15</option>
                                            <option value="Net 30">Net 30</option>
                                            <option value="Net 45">Net 45</option>
                                        </Field>
                                    </div>
                                    <div className="field">
                                        <label>Invoice Due Date&nbsp;<span style={{ color: "red" }}>*</span></label>
                                        <Field name="invoiceDueDate" type="date" className="input" />
                                    </div>
                                    <div className="field">
                                        <label>GL Post Date&nbsp;<span style={{ color: "red" }}>*</span></label>
                                        <Field name="glPostDate" type="date" className="input" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Invoice Description&nbsp;<span style={{ color: "red" }}>*</span></label>
                                    <Field name="invoiceDescription" className="input-new" />
                                </div>
                            </div>

                            {/* EXPENSE DETAILS */}
                            <div className="section-card">
                                <div className='toggle-container'>
                                    <div className="section-expense-title">Expense Details</div>
                                    <PriceToggle />
                                </div>
                                <div className="sub-section-card">
                                    <div className="field">
                                        <label>Line Amount&nbsp;<span style={{ color: "red" }}>*</span></label>
                                        <Field name="lineAmount" type="number" className="input" />
                                    </div>
                                    <div className="field">
                                        <label>Department&nbsp;<span style={{ color: "red" }}>*</span></label>
                                        <Field name="department" as="select" className="input">
                                            <option value="">Select Department</option>
                                            <option value="HR">HR</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Engineering">Engineering</option>
                                        </Field>
                                    </div>
                                    <div className="field">
                                        <label>Account&nbsp;<span style={{ color: "red" }}>*</span></label>
                                        <Field name="account" as="select" className="input">
                                            <option value="">Select Account</option>
                                            <option value="Account A">Account A</option>
                                            <option value="Account B">Account B</option>
                                            <option value="Account C">Account C</option>
                                        </Field>
                                    </div>
                                    <div className="field">
                                        <label>Location&nbsp;<span style={{ color: "red" }}>*</span></label>
                                        <Field name="location" as="select" className="input">
                                            <option value="">Select Location</option>
                                            <option value="New York">New York</option>
                                            <option value="London">London</option>
                                            <option value="Delhi">Delhi</option>
                                        </Field>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Description&nbsp;<span style={{ color: "red" }}>*</span></label>
                                    <Field name="expenseDescription" className="input-name" />
                                    <div className='expanse-coding'>
                                        <button type="button" className='expanse-coding-btn'>+ Add Expense Coding</button>
                                    </div>
                                </div>
                            </div>

                            {/* COMMENTS */}
                            <div className="section-card">
                                <div className="section-header">
                                    <img src={ReactLogo} alt="Logo" className="hello" />
                                    <div className="section-title" id="comments">Comments</div>
                                </div>
                                <div className="field">
                                    <Field
                                        name="comment"
                                        as="textarea"
                                        className="input-commenting"
                                        placeholder="Add a comment and use @Name to tag someone"
                                    />
                                </div>
                            </div>

                            {/* FOOTER BUTTONS */}
                            <div className="footer-buttons">
                                <button type="button" className="save-draft">Save as Draft</button>
                                <button type="submit" className="submit-btn">Submit & New</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
