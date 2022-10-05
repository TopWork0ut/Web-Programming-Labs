import React from "react";

export default function Contacts() {
  return (
    <section class="contact-section">
      <div class="container">
        <div class="contact-left">
          <h2>Contact</h2>
          <form action="#" method="post">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"></textarea>

            <input type="submit" value="send message" class="send-message" />
          </form>
        </div>

        <div class="contact-left">
          <iframe
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Lviv&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="450"
            height="450"
            // style="border:0"
            allowfullscreen=""
            loading="lazy"
            title="Lazy"></iframe>
        </div>
      </div>
    </section>
  );
}
