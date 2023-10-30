import React from "react";
import { Grid, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { saveAs } from "file-saver";
import "./Invoice.css";
import { BeatLoader } from "react-spinners";

const Invoice = ({ Datastate }) => {
  const [loading, setLoading] = React.useState(false);

  const createAndDownloadPdf = () => {
    setLoading(true);
    axios 
      .post("/create-pdf", Datastate)
      .then(() => axios.get("/fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error creating or fetching PDF:", error);
        setLoading(false);
      });
  };


  return (
    <Grid container justifyContent="center" mt={4}>
      <Grid item xs={8}>
        <Box sx={{ mb: 3 }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            sx={{ textTransform: "capitalize" }}
          >
            Back to Home
          </Button>
          <Button
            onClick={createAndDownloadPdf}
            variant="contained"
            sx={{ marginLeft: 2, textTransform: "capitalize" }}
            disabled={loading}
          >
            {loading ? (
              <>
                Generating PDF
                <BeatLoader size={8} color={"#ffffff"} />{" "}
              </>
            ) : (
              "Download  PDF"
            )}
          </Button>
        </Box>
        <div id="invoice">
          <div className="invoice-box">
            <table cellpadding="0" cellspacing="0">
              <tr className="top">
                <td colspan="2">
                  <table>
                    <tr>
                      <td className="title">
                        <img
                          src="https://ukbd.app/static/media/UKBD.0c809b708f59760b4a53.png"
                          style={{ width: "100%", maxWidth: "120px" }}
                        />
                      </td>

                      <td>
                        <h2>UK-BD Invoice</h2>
                        <div className="invoiceInfoBox">
                          <div className="invoiceInfo">
                            <p>
                              Invoice no: <br />
                              Invoice date: <br />
                            </p>
                            <p>
                              34523452 <br />
                              16-10-2023 <br />
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr className="information">
                <td colspan="2">
                  <table>
                    <tr>
                      <td>
                        <h5>Host Info:</h5>
                      </td>
                      <td>
                        <h5>Bill to:</h5>
                      </td>
                    </tr>
                    <tr>
                      <td className="fs14">
                        <p>
                          Rofiqe <br />
                          rofique@gmail.com
                          <br />
                          12324355
                          <br />
                        </p>
                      </td>
                      <td className="fs14">
                        <p>
                          Jahid <br />
                          jahid@gmail.com
                          <br />
                          12324355
                          <br />
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <table>
                <tr className="heading">
                  <td width="50%">Booking information:</td>
                  <td></td>
                </tr>
                <tr className="item">
                  <td>Property address</td>
                  <td>dhaka, bandladesh</td>
                </tr>
                <tr className="item">
                  <td>Check in</td>
                  <td>12-12-2023</td>
                </tr>
                <tr className="item">
                  <td>Check out</td>
                  <td>12-12-2023</td>
                </tr>
                <tr className="item">
                  <td>Stay days</td>
                  <td>6days</td>
                </tr>
                <tr className="item">
                  <td>Guest</td>
                  <td>2 adult, 1 pets</td>
                </tr>
                <tr className="item">
                  <td>Currency</td>
                  <td>USD</td>
                </tr>
              </table>
              <br />
              <br />
              <table>
                <tr className="heading">
                  <td>Payment Information:</td>
                  <td>Price</td>
                </tr>
                <tr className="item">
                  <td>Per Night</td>
                  <td>$45</td>
                </tr>
                <tr className="item">
                  <td>Discount Persentage</td>
                  <td>20%</td>
                </tr>
                <tr className="item">
                  <td>$(45 * 6) Nights</td>
                  <td>$300</td>
                </tr>
                <tr className="item">
                  <td>Long Stay Discount</td>
                  <td>$34</td>
                </tr>
                <tr className="item">
                  <td>Service Fee</td>
                  <td>$15</td>
                </tr>
              </table>
              <tr className="information">
                <td colspan="2">
                  <table>
                    <tr>
                      <td className="note">
                        <br />
                        <span>Note:</span>
                        <br />
                        <p>Thank you for your business.</p>
                      </td>
                      <td>
                        <div className="invoiceInfoBox">
                          <div className="invoiceInfo">
                            <p>
                              <span>Subtotal :</span> <br />
                              <span>Vat(%) :</span> <br />
                              <span>Tax(%) :</span> <br />
                              <span className="totalPrice">Total :</span> <br />
                            </p>
                            <p>
                              $3452
                              <br />
                              $34
                              <br />
                              $45
                              <br />
                              <span className="totalPrice">$4543</span>
                              <br />
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <br />
            </table>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Invoice;
