const buildHeader = () => {
  return "<h1>Hello world</h1>";
};

function buildMain() {
  return "<p>this is the body</p>";
}

const buildSiteLayout = () => {
  const header = buildHeader();
  const body = buildMain();
  return `${header} ${body}`;
};

const siteHTML = buildSiteLayout();
document.write(siteHTML);
