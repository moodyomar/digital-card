import React, { useState } from 'react';
import './FeedbackForm.css'; // Importing the CSS file

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (rating <= 3) {
      // Construct mailto link for users with low ratings
      const subject = encodeURIComponent("تقييم خدمة العملاء");
      const body = encodeURIComponent(`التقييم: ${rating}/5\nالملاحظات: ${feedback}`);
      window.location.href = `mailto:info@qbmedia.co.il?subject=${subject}&body=${body}`;
    }
    // For rating > 3, you already have the logic to guide users to Google reviews
  };
  

  const handleCopyFeedback = () => {
    navigator.clipboard.writeText(feedback);
    alert('تم نسخ التقييم إلى الحافظة. الرجاء لصقها في تقييمات Google.');
  };

  if (!submitted) {
    return (
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="rating-container">
            <p> هل اعجبتك خدماتنا؟ هل تنصح بنا؟ قييم تجربتك.</p>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star} className={`star ${rating >= star ? 'filled' : ''}`}>
                  <input
                    type="radio"
                    name="rating"
                    value={star}
                    onChange={() => setRating(star)}
                    className="star-radio"
                  />
                  ☆
                </label>
              ))}
            </div>
          </div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="أدخل ملاحظاتك هنا..."
            rows={4}
            className="feedback-textarea"
          />
          <button type="submit" className="submit-button">إرسال التقييم</button>
        </form>
      );
      } else {
      return (
        <div className="thank-you-message">
          {rating > 3 ? (
            <>
              <p>شكرًا لك على ملاحظاتك الإيجابية! هل يمكنك أخذ لحظة لمشاركة تقييمك على صفحة أعمالنا على Google؟ سيساعدنا ذلك كثيرًا.</p>
              <div className='google-buttons'>
              <button onClick={handleCopyFeedback} className="copy-button">نسخ التقييم</button>
              <a href="https://g.page/r/Ce7A9ALIf7OkEAI/review" target="_blank" rel="noopener noreferrer" className="google-link">اكمال التقييم في Google</a>
              </div>
            </>
          ) : (
            <p>شكرًا لك على ملاحظاتك ومصداقيتك معنا. سنعمل بجد على التطوير والتحسين من ذاتنا.</p>
          )}
        </div>
      );
      }
    };      

export default FeedbackForm;
