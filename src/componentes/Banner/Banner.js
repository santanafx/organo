import "./Banner.css";

export const Banner = () => {
  //JSX, como o react trabgalha com a parte visual. O react vai entender o que a funcao banner está retornando e fazer o append no DOM
  return (
    <header className="banner">
      <img src="/imagens/banner.png" alt="O banner principal da página do Organo" />;
    </header>
  );
};
