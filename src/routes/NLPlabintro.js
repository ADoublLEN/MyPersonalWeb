import Navbar from "../components/Navbar";
import ProjDetail from "../components/ProjDetail";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <ProjDetail
        title="Deep Learning x NLP LAB"
        content="The mini-lab showcases a collection of fundamental NLP frameworks, each meticulously crafted and tailored for specific tasks:"
        marginTop="180px" // 你可以根据需要更改这个值
      />
      <ProjDetail
        title="Handwritten Transformer"
        content="This is not just any regular transformer model. It has been implemented from scratch, offering insights into the inner workings and mechanics of the architecture. Accompanied by detailed comments, it's perfect for those keen on understanding the nuts and bolts of transformers. It's specifically designed for generation tasks, making it ideal for applications like machine translation or text generation."
        marginTop="80px" // 你可以根据需要更改这个值
      />
      <a
        href="https://colab.research.google.com/drive/1PlokbxHxvQCSsJVPSkIXQWL-09lomLHh?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "10px 20px",

          color: "green",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        View on Google Colab
      </a>
      <ProjDetail
        title="CNN + LSTM Framework"
        content="This combines the spatial hierarchy capture capabilities of Convolutional Neural Networks (CNNs) with the temporal sequence modeling power of Long Short-Term Memory (LSTM) networks. It's a robust framework primarily aimed at classification tasks. This makes it suitable for tasks such as sentiment analysis or document classification where both local and sequential features matter."
        marginTop="80px" // 你可以根据需要更改这个值
      />
      <a
        href="https://colab.research.google.com/drive/1qgTseQgDPUQIQmhwD0iqqZx6c42MYd-b?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "10px 20px",

          color: "green",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        View on Google Colab
      </a>
      <ProjDetail
        title="BERT Framework"
        content="BERT (Bidirectional Encoder Representations from Transformers) has revolutionized the NLP world with its pre-trained embeddings. This framework in the mini-lab leverages BERT for classification tasks. It's particularly adept at tasks where understanding context from both directions (left-to-right and right-to-left) can be beneficial."
        marginTop="80px" // 你可以根据需要更改这个值
      />
      <ProjDetail
        title="BERT + Bi-LSTM Framework"
        content="A fusion of BERT with Bi-directional LSTMs, this framework harnesses the power of BERT's context-rich embeddings with the sequence modeling of LSTMs. It's tailored for classification tasks and offers an enhanced performance especially in scenarios where sequence understanding is crucial."
        marginTop="80px" // 你可以根据需要更改这个值
      />
      <a
        href="
        https://colab.research.google.com/drive/1YLXvJE66Z8dE9ehugR5iH77CxQ4cUjEc?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "10px 20px",

          color: "green",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        View on Google Colab
      </a>
      <Footer />
    </>
  );
}

export default Service;
