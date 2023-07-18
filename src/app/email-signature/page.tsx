import Image from "next/image";

// Importing images
import cusecLogo from "/public/images/cusec-logo-2024.png";
import facebookIcon from "/public/images/facebook-icon.png";
import instagramIcon from "/public/images/instagram-icon.png";
import linkedinIcon from "/public/images/linkedin-icon.png";
import youtubeIcon from "/public/images/youtube-icon.png";

// export default function email_signature() {
//   return (
//     <div className="email-signature flex items-center space-x-4">
//       <a href="http://2023.cusec.net" className="block">
//         <Image src={cusecLogo} alt="CUSEC 2024" width={120} height={120} />
//       </a>

//       <div className="border-l border-gray-300 pl-4">
//         <div className="text-lg font-bold">Your Name</div>
//         <div className="italic">Your Title</div>

//         <div className="mt-2">
//           <b>Mobile:</b> <a href="tel:+1(226)123-1245">+1 (226) 123-1245</a>
//           <br />
//           <b>Email:</b> <a href="mailto:web@cusec.net">[REPLACE]@cusec.net</a>
//           <br />
//           <b>Website:</b> <a href="http://2023.cusec.net">2023.cusec.net</a>
//         </div>

//         <div className="flex space-x-4 mt-4" id="icons">
//           <a href="https://www.facebook.com/cusecofficial">
//             <Image alt="facebook" src={facebookIcon} width={24} height={24} />
//           </a>
//           <a href="https://www.instagram.com/cusecofficial">
//             <Image alt="instagram" src={instagramIcon} width={24} height={24} />
//           </a>
//           <a href="https://www.linkedin.com/company/cusec">
//             <Image alt="linkedin" src={linkedinIcon} width={24} height={24} />
//           </a>
//           <a href="https://www.youtube.com/channel/UCZ7j8F6h1CxD-uC0od9rHBw">
//             <Image alt="youtube" src={youtubeIcon} width={24} height={24} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function email_signature() {
  return (
    <>
      <div className="email-signature">
        <table>
          <tbody>
            <tr>
              <td style={{ padding: "0 12px 0 0" }} valign="middle">
                <a
                  href="http://2023.cusec.net"
                  style={{ textDecoration: "none" }}
                >
                  <Image
                    src={cusecLogo}
                    alt="CUSEC 2024"
                    width={120}
                    height={120}
                  />
                </a>
              </td>
              <td
                style={{
                  borderLeft: "2px solid whitesmoke",
                  paddingLeft: "12px",
                }}
              >
                <table>
                  <tbody>
                    <tr style={{ fontSize: "15px" }}>
                      <td>
                        <b>Your Name</b>
                        <br />
                        <i>Your Title</i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Mobile</b>:
                        <a href="tel:+1(226)123-1245">+1-(226)-123-1245</a>{" "}
                        <br />
                        <b>Email</b>:{" "}
                        <a href="mailto:web@cusec.net">[REPLACE]@cusec.net</a>{" "}
                        <br />
                        <b>Website</b>:{" "}
                        <a href="http://2023.cusec.net">2023.cusec.net</a>
                      </td>
                    </tr>
                    <tr>
                      <td id="icons" style={{ padding: "5px 0px 0px 0px" }}>
                        <div className="flex space-x-2">
                          <a href="https://www.facebook.com/cusecofficial">
                            <Image
                              alt="facebook"
                              src={facebookIcon}
                              width={18}
                              height={18}
                              className="mr-2"
                            />
                          </a>
                          <a href="https://www.instagram.com/cusecofficial">
                            <Image
                              alt="instagram"
                              src={instagramIcon}
                              width={18}
                              height={18}
                              className="mr-2"
                            />
                          </a>
                          <a href="https://www.linkedin.com/company/cusec">
                            <Image
                              alt="linkedin"
                              src={linkedinIcon}
                              width={18}
                              height={18}
                              className="mr-2"
                            />
                          </a>
                          <a href="https://www.youtube.com/channel/UCZ7j8F6h1CxD-uC0od9rHBw">
                            <Image
                              alt="youtube"
                              src={youtubeIcon}
                              width={18}
                              height={18}
                              className="mr-2"
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
