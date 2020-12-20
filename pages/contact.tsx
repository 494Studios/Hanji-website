import { TextField } from '@material-ui/core';
import React, { FC, useEffect } from 'react';

const ContactPage: FC = () => {
  useEffect(() => {
    //   const js = `
    //   function ml_webform_success_3183544() {
    //     var $ = ml_jQuery || jQuery;
    //     $('.ml-subscribe-form-3183544 .ml-block-success').show();
    //     $('.ml-subscribe-form-3183544 .ml-block-form').hide();
    //   };
    // `;
    // const script = document.createElement('script');
    // const scriptText = document.createTextNode(js);
    // script.appendChild(scriptText);
    // document.body.appendChild(script);

    const script2 = document.createElement('script');
    script2.src =
      'https://static.mailerlite.com/js/w/webforms.min.js?v28bf44f740701752bfc6767bc7e171d4';
    document.body.appendChild(script2);
  }, []);

  return (
    <section id="signup" className="gradient-gray">
      <div
        id="mlb2-3183544"
        className="ml-subscribe-form ml-subscribe-form-3183544"
      >
        <div className="ml-vertical-align-center">
          {/* <div
            className="subscribe-form ml-block-success"
            style={{ display: 'none' }}
          >
            <div className="form-section">
              <p>
                Thank you, you have successfully subscribed to our announcement
                list!
              </p>
            </div>
          </div> */}
          <form
            className="ml-block-form"
            action="https://landing.mailerlite.com/webforms/submit/o0s0f4"
            data-id="o0s0f4"
            data-code="o0s0f4"
            method="POST"
            target="_blank"
          >
            <p className="signup-title">
              Sign up for our announcement list and we'll let you know when we
              launch!
            </p>
            <div className="subscribe-form">
              <div className="form-section">
                <div className="form-group ml-field-email ml-validate-required ml-validate-email">
                  <TextField
                    type="email"
                    name="fields[email]"
                    className="form-control signup-text"
                    placeholder="Email address"
                    autoComplete="email"
                    spellCheck="false"
                    autoCapitalize="off"
                    autoCorrect="off"
                  />
                  {/* <input
                    type="email"
                    name="fields[email]"
                    className="form-control signup-text"
                    placeholder="Email address"
                    autoComplete="email"
                    spellCheck="false"
                    autoCapitalize="off"
                    autoCorrect="off"
                  /> */}
                  <input type="hidden" name="ml-submit" value="1" />
                  <button type="submit" className="primary signup-button">
                    Subscribe
                  </button>
                  <button
                    disabled
                    style={{ display: 'none' }}
                    type="button"
                    className="loading"
                  >
                    Submitting...
                    {/* <img
                  src="https://static.mailerlite.com/images/rolling@2x.gif"
                  alt="loading..."
                  width="20"
                  height="20"
                  style={{ width: '20px', height: '20px' }}
                /> */}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
