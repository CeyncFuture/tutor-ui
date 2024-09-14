import React, {useState} from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Checkbox} from "@mui/material";

const PrivacyPolicyForm = ({setStep, handleSubmit}) => {
    const [isAgreed, setIsAgreed] = useState(false);

    const handleChange = (e) => {
        setIsAgreed(e.target.checked);
    }

    return (
        <div>
            <Typography variant="body2" component="div" sx={{mb: 1}}>
                At Top Tutors Global, we respect your privacy and are committed to protecting your personal information.
                This Privacy Policy outlines how we collect, use, and protect your data when you visit our website or
                use our services.
                <br/> <br/>
                <b> 1. Information Collection and Use </b>
                <br/> <br/>
                You can visit Top Tutors Global without submitting any personal information. However, to access certain
                features or services, we may collect personal information, including but not limited to:

                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Password</li>
                    <li>Profile photo (for tutors)</li>
                    <li>Username</li>
                </ul>

                We may also collect any information you voluntarily provide in forms, surveys, forum posts, or direct
                communication. If you participate as a tutor, we may request additional information, such as
                identification details for verification purposes.

                <br/> <br/>
                <b>2. Aggregate Information</b>
                <br/> <br/>
                We automatically collect certain aggregate information when you use our services. This includes your
                browser type, IP address, and how you interact with the website. This data is anonymized and used for
                statistical analysis to improve our services.

                <br/> <br/>
                <b>3. Use of Personal Information</b>
                <br/> <br/>

                We use your personal information for the following purposes:

                <ul>
                    <li>To provide services and support as requested.</li>
                    <li>To verify your identity and ensure security.</li>
                    <li>To detect and prevent fraud and unauthorized use.</li>
                    <li>To send promotional messages, offers, and updates (you can opt-out at any time).</li>
                    <li>To improve the functionality of our site and services through data analysis.</li>
                </ul>

                    <b>4. Children's Privacy</b>
                <br/> <br/>

                Top Tutors Global does not knowingly collect personal information from children under 16. Our site is
                not intended for users under this age. If we discover that a child under 16 has provided personal
                information, we will take steps to delete such information immediately.

                <br/> <br/>
                        <b>5. Cookies and Online Tracking</b>
                <br/> <br/>

                We use cookies to enhance your experience on our website. These small text files allow us to store your
                preferences and maintain your login session. We also use third-party analytics services, which may track
                user activity across our site. You may opt to disable cookies through your browser settings, but this
                may limit some features of the website.

                <br/> <br/>
                            <b>6. Social Plugins</b>
                <br/> <br/>

                Our website may include social media plugins (e.g., Facebook, Google, LinkedIn) that allow you to
                interact with those networks. These plugins may collect data as governed by their respective privacy
                policies.

                <br/> <br/>
                                <b>7. Disclosure of Information</b>
                <br/> <br/>

                We may share your personal data with third-party service providers to help us deliver services and
                manage the site. For example:

                <ul>
                    <li>If you ask or answer a question publicly, your username and profile picture may be visible to other
                        users.</li>
                    <li>Private questions allow for anonymous interaction, but the question and responses will still be visible
                        to others.</li>
                </ul>

                We may also disclose information to comply with legal obligations, such as in response to legal
                processes, court orders, or regulatory requests.

                <br/> <br/>
                                    <b>8. Security Measures</b>
                <br/> <br/>

                We implement reasonable security measures such as encryption, password protection, and secure data
                storage to protect your personal information from unauthorized access. However, no system is 100%
                secure, so we cannot guarantee absolute security.

                <br/> <br/>
                                        <b>9. Links to Third-Party Sites</b>
                <br/> <br/>

                Top Tutors Global may provide links to external websites for your convenience. We are not responsible
                for the content or privacy policies of these third-party sites. We encourage you to review their privacy
                policies before using their services.

                <br/> <br/>
                                            <b>10. Data Retention and Deletion</b>
                <br/> <br/>

                You may review, update, or delete your personal information by logging into your account. If you wish to
                delete your account, you can contact us at <a href="mailto:toptutorsglobal@gmail.com">toptutorsglobal@gmail.com</a>,
                and we will process your request
                to remove your account and associated data.

                <br/> <br/>
                                                <b>11. Changes to Privacy Policy</b>
                <br/> <br/>

                We may update this Privacy Policy periodically. Any changes will be communicated via email to registered
                users and posted on our site. By continuing to use our services after such updates, you agree to the
                revised policy.

                <br/> <br/>
                                                    <b>12. Questions and Contact Information</b>
                <br/> <br/>

                If you have any questions about this Privacy Policy, feel free to contact us at <a href="mailto:toptutorsglobal@gmail.com">toptutorsglobal@gmail.com</a>.

                <br/> <br/>
                <b>13. Users outside of the Sri lanka</b>
                <br/> <br/>

                Our services are based in Sri Lanka, and personal data will be processed there. By using Top Tutors
                Global, you consent to this data transfer and processing. If you are located outside of the Sri Lanka.,
                please note that local data protection laws may differ from Sri Lanka Law.
            </Typography>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Checkbox onChange={handleChange}/>
                <Typography variant="body2" component="div">
                    I agree to the privacy policy.
                </Typography>
            </Box>
            <Button
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 1}}
                disabled={!isAgreed}
                onClick={handleSubmit}
            >
                Finish
            </Button>
            <Button
                fullWidth
                variant="contained"
                onClick={() => setStep(3)}
            >
                Back
            </Button>
        </div>
    );
};

export default PrivacyPolicyForm;
