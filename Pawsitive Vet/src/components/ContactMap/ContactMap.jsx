function ContactMap() {
    return (
        <>
            <div className="py-12">
                <div className="container m-auto">
                    <h2 className="text-3xl font-bold text-center mb-6">FIND US</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.916234645254!2d85.35959831073852!3d27.68898372620247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a240b3d8367%3A0x778dd267e1f16d03!2sPepsicola%20--%20Varun%20Beverage!5e0!3m2!1sen!2snp!4v1720338944114!5m2!1sen!2snp"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
}

export default ContactMap;
