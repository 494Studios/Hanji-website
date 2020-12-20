import { Button, TextField } from '@material-ui/core';
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
          <form
            className="ml-block-form"
            action="https://landing.mailerlite.com/webforms/submit/o0s0f4"
            data-id="o0s0f4"
            data-code="o0s0f4"
            method="POST"
            target="_blank"
          >
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
                  <input type="hidden" name="ml-submit" value="1" />
                  <Button type="submit" className="primary signup-button">
                    Submit
                  </Button>
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
