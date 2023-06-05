function changeHTML() {
  let nome = document.querySelector("#nome").value;
  let area = document.querySelector("#area").value;
  document.querySelector("#image__h1").innerHTML = nome;
  document.querySelector("#image__p").innerHTML = area;
  let site = document.querySelector("#site").value;
  document.querySelector("#site").innerHTML = site;
  let endereco = document.querySelector("#endereco").value;
  document.querySelector("#endereco").innerHTML = endereco;
  let telefoneFixo = document.querySelector("#telefonefixo").value;
  document.querySelector("#telefonefixo").innerHTML = telefoneFixo;
  let insta = document.querySelector("#insta").value;
  document.querySelector("#insta").innerHTML = insta;
  let linkedin = document.querySelector("#linkedin").value;
  document.querySelector("#linkedin").innerHTML = linkedin;
  let facebook = document.querySelector("#facebook").value;
  document.querySelector("#facebook").innerHTML = facebook;
  let youtube = document.querySelector("#youtube").value;
  document.querySelector("#youtube").innerHTML = youtube;
  let twitter = document.querySelector("#twitter").value;
  document.querySelector("#twitter").innerHTML = twitter;
}

function changeFone() {
  let ramalOrCelphoneSelected = document.querySelector(
    "#ramalcelularselecting"
  ).value;
  ramalOrCelphoneSelected === "Celular"
    ? (document.querySelector("#celular").style.display = "inline")
    : (document.querySelector("#celular").style.display = "none");
  ramalOrCelphoneSelected === "Ramal"
    ? (document.querySelector("#ramal").style.display = "inline")
    : (document.querySelector("#ramal").style.display = "none");
}

function changeGroup() {
  let empresa = document.querySelector("#empresa").value;
  let ramal = (document.querySelector("#ramalcelular").innerHTML =
    empresa !== "Empresa 2"
      ? `<select onchange="changeFone()" type="text" id="ramalcelularselecting" name="ramalcelular">
          <option hidden>Selecione ramal ou celular</option>
          <option value="Ramal">Ramal</option>
          <option value="Celular">Celular</option>
        </select>`
      : `<input onchange="phoneMask2()"  type="text" id="ramal2" maxlength="4" autocomplete="off" name="ramal2" placeholder="Digite o ramal" />`);
  empresa === "Empresa 2"
    ? (document.querySelector("#celular").style.display = "none")
    : "";
  empresa === "Empresa 2"
    ? (document.querySelector("#ramal").style.display = "none")
    : "";
  document.querySelector("#image__grupo").innerHTML =
    empresa === "Empresa 1"
      ? `<img src="data:image/png;base64,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" alt="" />`
      : `<img src="data:image/png;base64,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" alt=""/>`;
}

function phoneMask() {
  let celular = document.querySelector("#ramal").value;
  let ramal = `${celular}`;

  return (document.querySelector(
    "#image__ramal"
  ).innerHTML = `Ramal: ${ramal}`);
}

function phoneMask2() {
  let celular = document.querySelector("#ramal2").value;
  let ramal = `${celular}`;

  return (document.querySelector(
    "#image__ramal"
  ).innerHTML = `Ramal: ${ramal}`);
}

function removeImage() {
  document.querySelector("#result img").remove();
}

function phoneMaskCelular() {
  let celular = document.querySelector("#celular").value;
  let ramal =
    document.querySelector("#celular").value.length <= 7
      ? `Ramal: ${celular.replace("(", "").replace(")", "").replace(" ", "")}`
      : `${celular}`;

  return document.querySelector("#celular").value.length <= 7
    ? (document.querySelector("#image__ramal").innerHTML = `Ramal: ${celular
        .replace("(", "")
        .replace(")", "")
        .replace(" ", "")}`)
    : (document.querySelector("#image__ramal").innerHTML = ramal);
}

function phoneMaskFone() {
  let telefonefixo = document.querySelector("#telefonefixo").value;
  let ramal =
    document.querySelector("#telefonefixo").value.length <= 7
      ? `Ramal: ${telefonefixo
          .replace("(", "")
          .replace(")", "")
          .replace(" ", "")}`
      : `${telefonefixo}`;

  return document.querySelector("#telefonefixo").value.length <= 7
    ? (document.querySelector(
        "#image__ramal"
      ).innerHTML = `Ramal: ${telefonefixo
        .replace("(", "")
        .replace(")", "")
        .replace(" ", "")}`)
    : (document.querySelector("#image__ramal").innerHTML = ramal);
}

function convert() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) {
    alert("Por favor, selecione um arquivo.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const maxSize = 70;
      let width = img.width;
      let height = img.height;

      if (width > maxSize || height > maxSize) {
        const ratio = width / height;
        if (width > height) {
          width = maxSize;
          height = width / ratio;
        } else {
          height = maxSize;
          width = height * ratio;
        }
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      const base64 = canvas.toDataURL("image/jpeg", 0.8).split(",")[1];

      const img2 = new Image();
      img2.src = `data:image/jpeg;base64,${base64}`;
      img2.id = "result2";
      const resultDiv = document.querySelector("#result");
      resultDiv.appendChild(img2);
    };

    img.src = reader.result;
  };

  reader.readAsDataURL(file);
}

function convertLogo() {
  const fileInput = document.getElementById("fileInputLogo");
  const file = fileInput.files[0];

  if (!file) {
    alert("Por favor, selecione um arquivo.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const maxSize = 70;
      let width = img.width;
      let height = img.height;

      if (width > maxSize || height > maxSize) {
        const ratio = width / height;
        if (width > height) {
          width = maxSize;
          height = width / ratio;
        } else {
          height = maxSize;
          width = height * ratio;
        }
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      const base64 = canvas.toDataURL("image/jpeg", 0.8).split(",")[1];

      const img2 = new Image();
      img2.src = `data:image/jpeg;base64,${base64}`;
      img2.id = "logo2";
      const resultDiv = document.querySelector("#logo")
        ? document.querySelector("#logo")
        : null;
      resultDiv.appendChild(img2);
    };
    document.querySelector("#inputfile_text").remove();
    img.src = reader.result;
  };

  reader.readAsDataURL(file);
}

function createSignature() {
  alert("Salve os arquivos na pasta Downloads");
  let dataNome = document.querySelector("#nome").value;
  let dataArea = document.querySelector("#area").value;
  let dataSite = document.querySelector("#site").value;
  let dataEndereco = document.querySelector("#endereco").value;
  let dataTelefonefixo = document.querySelector("#telefonefixo").value;
  let dataEmailPessoal = document.querySelector("#emailPessoal").value;
  let dataInsta = document.querySelector("#insta").value;
  let daataLinkedin = document.querySelector("#linkedin").value;
  let dataYoutube = document.querySelector("#youtube").value;
  let dataTwitter = document.querySelector("#twitter").value;
  let dataFacebook = document.querySelector("#facebook").value;
  let dataEmpresa = document.querySelector("#empresa").value;
  let celular = document.querySelector("#ramal").value;
  let result2 =
    document.querySelector("#result img") != null
      ? document.querySelector("#result img")
      : "";
  let logo2 =
    document.querySelector("#logo img") != null
      ? document.querySelector("#logo img")
      : "";

  let celular2 =
    document.querySelector("#ramal2")?.value.length > 0 &&
    document.querySelector("#ramal2")?.value;
  document.querySelector("#image__h1").innerHTML = dataNome;
  document.querySelector("#image__p").innerHTML = dataArea;
  document.querySelector("#site").innerHTML = dataSite;
  document.querySelector("#endereco").innerHTML = dataEndereco;
  let dataTelefone = (document.querySelector("#image__telefone").innerHTML =
    dataEmpresa === "Empresa 2"
      ? "+55 (11) 2578-5032"
      : "+55 (11) 2578-5628");
  document.querySelector("#image__grupo").innerHTML =
    dataEmpresa === "Empresa 1"
      ? `<img src="data:image/png;base64,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" alt="" />`
      : `<img src="data:image/png;base64,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" alt=""/>`;
  let imagemAssinaturaEmpresa =
    dataEmpresa === "Empresa 1"
      ? `<img src="data:image/png;base64,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" />`
      : `<img src="data:image/png;base64,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" alt=""/>`;

  let ramal = `Ramal: ${celular2.length > 0 ? celular2 : celular}`;

  let dataRamal =
    dataEmpresa === "Empresa 2"
      ? `Ramal: ${document.querySelector("#ramal2").value}`
      : document.querySelector("#ramalcelularselecting").value === "Celular"
      ? document.querySelector("#celular").value
      : `Ramal: ${document.querySelector("#ramal").value}`;

  let data = `<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:w="urn:schemas-microsoft-com:office:word" xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
  xmlns="http://www.w3.org/TR/REC-html40">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=windows-1252" />
  <meta name="ProgId" content="Word.Document" />
  <meta name="Generator" content="Microsoft Word 15" />
  <meta name="Originator" content="Microsoft Word 15" />
  <!--[if !mso]>
      <style>
        v: * {
          behavior: url(#default#VML);
        }
        o: * {
          behavior: url(#default#VML);
        }
        w: * {
          behavior: url(#default#VML);
        }
        .shape {
          behavior: url(#default#VML);
        }
      </style>
    <![endif]-->
  <!--[if gte mso 9
      ]><xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
        </o:OfficeDocumentSettings> </xml
    ><![endif]-->
  <!--[if gte mso 9
      ]><xml>
        <w:WordDocument>
          <w:View>Normal</w:View>
          <w:Zoom>0</w:Zoom>
          <w:TrackMoves />
          <w:TrackFormatting />
          <w:HyphenationZone>21</w:HyphenationZone>
          <w:PunctuationKerning />
          <w:ValidateAgainstSchemas />
          <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
          <w:IgnoreMixedContent>false</w:IgnoreMixedContent>
          <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
          <w:DoNotPromoteQF />
          <w:LidThemeOther>PT-BR</w:LidThemeOther>
          <w:LidThemeAsian>X-NONE</w:LidThemeAsian>
          <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>
          <w:DoNotShadeFormData />
          <w:Compatibility>
            <w:BreakWrappedTables />
            <w:SnapToGridInCell />
            <w:WrapTextWithPunct />
            <w:UseAsianBreakRules />
            <w:DontGrowAutofit />
            <w:SplitPgBreakAndParaMark />
            <w:EnableOpenTypeKerning />
            <w:DontFlipMirrorIndents />
            <w:OverrideTableStyleHps />
            <w:UseFELayout />
          </w:Compatibility>
          <m:mathPr>
            <m:mathFont m:val="Cambria Math" />
            <m:brkBin m:val="before" />
            <m:brkBinSub m:val="&#45;-" />
            <m:smallFrac m:val="off" />
            <m:dispDef />
            <m:lMargin m:val="0" />
            <m:rMargin m:val="0" />
            <m:defJc m:val="centerGroup" />
            <m:wrapIndent m:val="1440" />
            <m:intLim m:val="subSup" />
            <m:naryLim m:val="undOvr" /> </m:mathPr
        ></w:WordDocument> </xml
    ><![endif]-->
  <!--[if gte mso 9
      ]><xml>
        <w:LatentStyles
          DefLockedState="false"
          DefUnhideWhenUsed="false"
          DefSemiHidden="false"
          DefQFormat="false"
          DefPriority="99"
          LatentStyleCount="376"
        >
          <w:LsdException
            Locked="false"
            Priority="0"
            QFormat="true"
            Name="Normal"
          />
          <w:LsdException
            Locked="false"
            Priority="9"
            QFormat="true"
            Name="heading 1"
          />
          <w:LsdException
            Locked="false"
            Priority="9"
            SemiHidden="true"
            UnhideWhenUsed="true"
            QFormat="true"
            Name="heading 2"
          />
          <w:LsdException
            Locked="false"
            Priority="9"
            SemiHidden="true"
            UnhideWhenUsed="true"
            QFormat="true"
            Name="heading 3"
          />
          <w:LsdException
            Locked="false"
            Priority="9"
            SemiHidden="true"
            UnhideWhenUsed="true"
            QFormat="true"
            Name="heading 4"
          />
          <w:LsdException
            Locked="false"
            Priority="9"
            SemiHidden="true"
            UnhideWhenUsed="true"
            QFormat="true"
            Name="heading 5"
          />
          <w:LsdException
            Locked="false"
            Priority="9"
            SemiHidden="true"
            UnhideWhenUsed="true"
            QFormat="true"
            Name="heading 6"
          />
          <w:LsdException
            Locked="false"
            Priority="9"
            SemiHidden="true"
            UnhideWhenUsed="true"
            QFormat="true"
            Name="heading 7"
          />
          <w:LsdException
            Locked="false"
            Priority="9"
            SemiHidden="true"
            UnhideWhenUsed="true"
            QFormat="true"
            Name="heading 8"
          />
          <w:LsdException
            Locked="false"
            Priority="9"
            SemiHidden="true"
            UnhideWhenUsed="true"
            QFormat="true"
            Name="heading 9"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="index 1"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="index 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="index 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="index 4"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="index 5"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="index 6"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="index 7"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="index 8"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="index 9"
          />
          <w:LsdException
            Locked="false"
            Priority="39"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="toc 1"
          />
          <w:LsdException
            Locked="false"
            Priority="39"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="toc 2"
          />
          <w:LsdException
            Locked="false"
            Priority="39"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="toc 3"
          />
          <w:LsdException
            Locked="false"
            Priority="39"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="toc 4"
          />
          <w:LsdException
            Locked="false"
            Priority="39"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="toc 5"
          />
          <w:LsdException
            Locked="false"
            Priority="39"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="toc 6"
          />
          <w:LsdException
            Locked="false"
            Priority="39"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="toc 7"
          />
          <w:LsdException
            Locked="false"
            Priority="39"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="toc 8"
          />
          <w:LsdException
            Locked="false"
            Priority="39"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="toc 9"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Normal Indent"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="footnote text"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="annotation text"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="header"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="footer"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="index heading"
          />
          <w:LsdException
            Locked="false"
            Priority="35"
            SemiHidden="true"
            UnhideWhenUsed="true"
            QFormat="true"
            Name="caption"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="table of figures"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="envelope address"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="envelope return"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="footnote reference"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="annotation reference"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="line number"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="page number"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="endnote reference"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="endnote text"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="table of authorities"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="macro"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="toa heading"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List Bullet"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List Number"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List 4"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List 5"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List Bullet 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List Bullet 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List Bullet 4"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List Bullet 5"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List Number 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List Number 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List Number 4"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List Number 5"
          />
          <w:LsdException
            Locked="false"
            Priority="10"
            QFormat="true"
            Name="Title"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Closing"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Signature"
          />
          <w:LsdException
            Locked="false"
            Priority="1"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Default Paragraph Font"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Body Text"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Body Text Indent"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List Continue"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List Continue 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List Continue 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List Continue 4"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="List Continue 5"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Message Header"
          />
          <w:LsdException
            Locked="false"
            Priority="11"
            QFormat="true"
            Name="Subtitle"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Salutation"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Date"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Body Text First Indent"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Body Text First Indent 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Note Heading"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Body Text 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Body Text 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Body Text Indent 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Body Text Indent 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Block Text"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Hyperlink"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="FollowedHyperlink"
          />
          <w:LsdException
            Locked="false"
            Priority="22"
            QFormat="true"
            Name="Strong"
          />
          <w:LsdException
            Locked="false"
            Priority="20"
            QFormat="true"
            Name="Emphasis"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Document Map"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Plain Text"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="E-mail Signature"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="HTML Top of Form"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="HTML Bottom of Form"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Normal (Web)"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="HTML Acronym"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="HTML Address"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="HTML Cite"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="HTML Code"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="HTML Definition"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="HTML Keyboard"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="HTML Preformatted"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="HTML Sample"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="HTML Typewriter"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="HTML Variable"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Normal Table"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="annotation subject"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="No List"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Outline List 1"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Outline List 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Outline List 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Simple 1"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Simple 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Simple 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Classic 1"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Classic 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Classic 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Classic 4"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Colorful 1"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Colorful 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Colorful 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Columns 1"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Columns 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Columns 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Columns 4"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Columns 5"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Grid 1"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Grid 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Grid 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Grid 4"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Grid 5"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Grid 6"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Grid 7"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Grid 8"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table List 1"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table List 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table List 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table List 4"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table List 5"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table List 6"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table List 7"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table List 8"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table 3D effects 1"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table 3D effects 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table 3D effects 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Contemporary"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Elegant"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Professional"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Subtle 1"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Subtle 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Web 1"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Web 2"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Web 3"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Balloon Text"
          />
          <w:LsdException Locked="false" Priority="39" Name="Table Grid" />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Table Theme"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            Name="Placeholder Text"
          />
          <w:LsdException
            Locked="false"
            Priority="1"
            QFormat="true"
            Name="No Spacing"
          />
          <w:LsdException Locked="false" Priority="60" Name="Light Shading" />
          <w:LsdException Locked="false" Priority="61" Name="Light List" />
          <w:LsdException Locked="false" Priority="62" Name="Light Grid" />
          <w:LsdException
            Locked="false"
            Priority="63"
            Name="Medium Shading 1"
          />
          <w:LsdException
            Locked="false"
            Priority="64"
            Name="Medium Shading 2"
          />
          <w:LsdException Locked="false" Priority="65" Name="Medium List 1" />
          <w:LsdException Locked="false" Priority="66" Name="Medium List 2" />
          <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1" />
          <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2" />
          <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3" />
          <w:LsdException Locked="false" Priority="70" Name="Dark List" />
          <w:LsdException
            Locked="false"
            Priority="71"
            Name="Colorful Shading"
          />
          <w:LsdException Locked="false" Priority="72" Name="Colorful List" />
          <w:LsdException Locked="false" Priority="73" Name="Colorful Grid" />
          <w:LsdException
            Locked="false"
            Priority="60"
            Name="Light Shading Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="61"
            Name="Light List Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="62"
            Name="Light Grid Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="63"
            Name="Medium Shading 1 Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="64"
            Name="Medium Shading 2 Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="65"
            Name="Medium List 1 Accent 1"
          />
          <w:LsdException Locked="false" SemiHidden="true" Name="Revision" />
          <w:LsdException
            Locked="false"
            Priority="34"
            QFormat="true"
            Name="List Paragraph"
          />
          <w:LsdException
            Locked="false"
            Priority="29"
            QFormat="true"
            Name="Quote"
          />
          <w:LsdException
            Locked="false"
            Priority="30"
            QFormat="true"
            Name="Intense Quote"
          />
          <w:LsdException
            Locked="false"
            Priority="66"
            Name="Medium List 2 Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="67"
            Name="Medium Grid 1 Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="68"
            Name="Medium Grid 2 Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="69"
            Name="Medium Grid 3 Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="70"
            Name="Dark List Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="71"
            Name="Colorful Shading Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="72"
            Name="Colorful List Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="73"
            Name="Colorful Grid Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="60"
            Name="Light Shading Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="61"
            Name="Light List Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="62"
            Name="Light Grid Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="63"
            Name="Medium Shading 1 Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="64"
            Name="Medium Shading 2 Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="65"
            Name="Medium List 1 Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="66"
            Name="Medium List 2 Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="67"
            Name="Medium Grid 1 Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="68"
            Name="Medium Grid 2 Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="69"
            Name="Medium Grid 3 Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="70"
            Name="Dark List Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="71"
            Name="Colorful Shading Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="72"
            Name="Colorful List Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="73"
            Name="Colorful Grid Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="60"
            Name="Light Shading Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="61"
            Name="Light List Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="62"
            Name="Light Grid Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="63"
            Name="Medium Shading 1 Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="64"
            Name="Medium Shading 2 Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="65"
            Name="Medium List 1 Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="66"
            Name="Medium List 2 Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="67"
            Name="Medium Grid 1 Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="68"
            Name="Medium Grid 2 Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="69"
            Name="Medium Grid 3 Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="70"
            Name="Dark List Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="71"
            Name="Colorful Shading Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="72"
            Name="Colorful List Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="73"
            Name="Colorful Grid Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="60"
            Name="Light Shading Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="61"
            Name="Light List Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="62"
            Name="Light Grid Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="63"
            Name="Medium Shading 1 Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="64"
            Name="Medium Shading 2 Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="65"
            Name="Medium List 1 Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="66"
            Name="Medium List 2 Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="67"
            Name="Medium Grid 1 Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="68"
            Name="Medium Grid 2 Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="69"
            Name="Medium Grid 3 Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="70"
            Name="Dark List Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="71"
            Name="Colorful Shading Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="72"
            Name="Colorful List Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="73"
            Name="Colorful Grid Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="60"
            Name="Light Shading Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="61"
            Name="Light List Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="62"
            Name="Light Grid Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="63"
            Name="Medium Shading 1 Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="64"
            Name="Medium Shading 2 Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="65"
            Name="Medium List 1 Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="66"
            Name="Medium List 2 Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="67"
            Name="Medium Grid 1 Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="68"
            Name="Medium Grid 2 Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="69"
            Name="Medium Grid 3 Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="70"
            Name="Dark List Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="71"
            Name="Colorful Shading Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="72"
            Name="Colorful List Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="73"
            Name="Colorful Grid Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="60"
            Name="Light Shading Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="61"
            Name="Light List Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="62"
            Name="Light Grid Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="63"
            Name="Medium Shading 1 Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="64"
            Name="Medium Shading 2 Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="65"
            Name="Medium List 1 Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="66"
            Name="Medium List 2 Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="67"
            Name="Medium Grid 1 Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="68"
            Name="Medium Grid 2 Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="69"
            Name="Medium Grid 3 Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="70"
            Name="Dark List Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="71"
            Name="Colorful Shading Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="72"
            Name="Colorful List Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="73"
            Name="Colorful Grid Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="19"
            QFormat="true"
            Name="Subtle Emphasis"
          />
          <w:LsdException
            Locked="false"
            Priority="21"
            QFormat="true"
            Name="Intense Emphasis"
          />
          <w:LsdException
            Locked="false"
            Priority="31"
            QFormat="true"
            Name="Subtle Reference"
          />
          <w:LsdException
            Locked="false"
            Priority="32"
            QFormat="true"
            Name="Intense Reference"
          />
          <w:LsdException
            Locked="false"
            Priority="33"
            QFormat="true"
            Name="Book Title"
          />
          <w:LsdException
            Locked="false"
            Priority="37"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Bibliography"
          />
          <w:LsdException
            Locked="false"
            Priority="39"
            SemiHidden="true"
            UnhideWhenUsed="true"
            QFormat="true"
            Name="TOC Heading"
          />
          <w:LsdException Locked="false" Priority="41" Name="Plain Table 1" />
          <w:LsdException Locked="false" Priority="42" Name="Plain Table 2" />
          <w:LsdException Locked="false" Priority="43" Name="Plain Table 3" />
          <w:LsdException Locked="false" Priority="44" Name="Plain Table 4" />
          <w:LsdException Locked="false" Priority="45" Name="Plain Table 5" />
          <w:LsdException
            Locked="false"
            Priority="40"
            Name="Grid Table Light"
          />
          <w:LsdException
            Locked="false"
            Priority="46"
            Name="Grid Table 1 Light"
          />
          <w:LsdException Locked="false" Priority="47" Name="Grid Table 2" />
          <w:LsdException Locked="false" Priority="48" Name="Grid Table 3" />
          <w:LsdException Locked="false" Priority="49" Name="Grid Table 4" />
          <w:LsdException
            Locked="false"
            Priority="50"
            Name="Grid Table 5 Dark"
          />
          <w:LsdException
            Locked="false"
            Priority="51"
            Name="Grid Table 6 Colorful"
          />
          <w:LsdException
            Locked="false"
            Priority="52"
            Name="Grid Table 7 Colorful"
          />
          <w:LsdException
            Locked="false"
            Priority="46"
            Name="Grid Table 1 Light Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="47"
            Name="Grid Table 2 Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="48"
            Name="Grid Table 3 Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="49"
            Name="Grid Table 4 Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="50"
            Name="Grid Table 5 Dark Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="51"
            Name="Grid Table 6 Colorful Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="52"
            Name="Grid Table 7 Colorful Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="46"
            Name="Grid Table 1 Light Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="47"
            Name="Grid Table 2 Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="48"
            Name="Grid Table 3 Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="49"
            Name="Grid Table 4 Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="50"
            Name="Grid Table 5 Dark Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="51"
            Name="Grid Table 6 Colorful Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="52"
            Name="Grid Table 7 Colorful Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="46"
            Name="Grid Table 1 Light Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="47"
            Name="Grid Table 2 Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="48"
            Name="Grid Table 3 Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="49"
            Name="Grid Table 4 Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="50"
            Name="Grid Table 5 Dark Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="51"
            Name="Grid Table 6 Colorful Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="52"
            Name="Grid Table 7 Colorful Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="46"
            Name="Grid Table 1 Light Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="47"
            Name="Grid Table 2 Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="48"
            Name="Grid Table 3 Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="49"
            Name="Grid Table 4 Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="50"
            Name="Grid Table 5 Dark Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="51"
            Name="Grid Table 6 Colorful Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="52"
            Name="Grid Table 7 Colorful Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="46"
            Name="Grid Table 1 Light Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="47"
            Name="Grid Table 2 Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="48"
            Name="Grid Table 3 Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="49"
            Name="Grid Table 4 Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="50"
            Name="Grid Table 5 Dark Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="51"
            Name="Grid Table 6 Colorful Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="52"
            Name="Grid Table 7 Colorful Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="46"
            Name="Grid Table 1 Light Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="47"
            Name="Grid Table 2 Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="48"
            Name="Grid Table 3 Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="49"
            Name="Grid Table 4 Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="50"
            Name="Grid Table 5 Dark Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="51"
            Name="Grid Table 6 Colorful Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="52"
            Name="Grid Table 7 Colorful Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="46"
            Name="List Table 1 Light"
          />
          <w:LsdException Locked="false" Priority="47" Name="List Table 2" />
          <w:LsdException Locked="false" Priority="48" Name="List Table 3" />
          <w:LsdException Locked="false" Priority="49" Name="List Table 4" />
          <w:LsdException
            Locked="false"
            Priority="50"
            Name="List Table 5 Dark"
          />
          <w:LsdException
            Locked="false"
            Priority="51"
            Name="List Table 6 Colorful"
          />
          <w:LsdException
            Locked="false"
            Priority="52"
            Name="List Table 7 Colorful"
          />
          <w:LsdException
            Locked="false"
            Priority="46"
            Name="List Table 1 Light Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="47"
            Name="List Table 2 Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="48"
            Name="List Table 3 Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="49"
            Name="List Table 4 Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="50"
            Name="List Table 5 Dark Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="51"
            Name="List Table 6 Colorful Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="52"
            Name="List Table 7 Colorful Accent 1"
          />
          <w:LsdException
            Locked="false"
            Priority="46"
            Name="List Table 1 Light Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="47"
            Name="List Table 2 Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="48"
            Name="List Table 3 Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="49"
            Name="List Table 4 Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="50"
            Name="List Table 5 Dark Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="51"
            Name="List Table 6 Colorful Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="52"
            Name="List Table 7 Colorful Accent 2"
          />
          <w:LsdException
            Locked="false"
            Priority="46"
            Name="List Table 1 Light Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="47"
            Name="List Table 2 Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="48"
            Name="List Table 3 Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="49"
            Name="List Table 4 Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="50"
            Name="List Table 5 Dark Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="51"
            Name="List Table 6 Colorful Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="52"
            Name="List Table 7 Colorful Accent 3"
          />
          <w:LsdException
            Locked="false"
            Priority="46"
            Name="List Table 1 Light Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="47"
            Name="List Table 2 Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="48"
            Name="List Table 3 Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="49"
            Name="List Table 4 Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="50"
            Name="List Table 5 Dark Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="51"
            Name="List Table 6 Colorful Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="52"
            Name="List Table 7 Colorful Accent 4"
          />
          <w:LsdException
            Locked="false"
            Priority="46"
            Name="List Table 1 Light Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="47"
            Name="List Table 2 Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="48"
            Name="List Table 3 Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="49"
            Name="List Table 4 Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="50"
            Name="List Table 5 Dark Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="51"
            Name="List Table 6 Colorful Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="52"
            Name="List Table 7 Colorful Accent 5"
          />
          <w:LsdException
            Locked="false"
            Priority="46"
            Name="List Table 1 Light Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="47"
            Name="List Table 2 Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="48"
            Name="List Table 3 Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="49"
            Name="List Table 4 Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="50"
            Name="List Table 5 Dark Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="51"
            Name="List Table 6 Colorful Accent 6"
          />
          <w:LsdException
            Locked="false"
            Priority="52"
            Name="List Table 7 Colorful Accent 6"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Mention"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Smart Hyperlink"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Hashtag"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Unresolved Mention"
          />
          <w:LsdException
            Locked="false"
            SemiHidden="true"
            UnhideWhenUsed="true"
            Name="Smart Link"
          />
        </w:LatentStyles> </xml
    ><![endif]-->
  <style>
    <!--
    /* Font Definitions */
    @font-face {
      font-family: "Cambria Math";
      panose-1: 2 4 5 3 5 4 6 3 2 4;
      mso-font-charset: 0;
      mso-font-pitch: variable;
      mso-font-signature: -536869121 1107305727 33554432 0 415 0;
    }

    @font-face {
      font-family: Calibri;
      panose-1: 2 15 5 2 2 2 4 3 2 4;
      mso-font-charset: 0;
      mso-font-pitch: variable;
      mso-font-signature: -469750017 -1073732485 9 0 511 0;
    }

    @font-face {
      font-family: Roboto;
      mso-font-alt: Roboto;
      mso-font-charset: 0;
      mso-generic-font-family: auto;
      mso-font-pitch: variable;
      mso-font-signature: -536870145 1342185563 32 0 415 0;
    }

    /* Style Definitions */
    p.MsoNormal,
    li.MsoNormal,
    div.MsoNormal {
      mso-style-unhide: no;
      mso-style-qformat: yes;
      mso-style-parent: "";
      margin: 0cm;
      mso-pagination: widow-orphan;
      font-size: 11.0pt;
      font-family: "Calibri", sans-serif;
      mso-ascii-font-family: Calibri;
      mso-ascii-theme-font: minor-latin;
      mso-fareast-theme-font: minor-fareast;
      mso-hansi-font-family: Calibri;
      mso-hansi-theme-font: minor-latin;
      mso-bidi-theme-font: minor-bidi;
    }

    a:link,
    span.MsoHyperlink {
      mso-style-priority: 99;
      color: blue;
      text-decoration: underline;
      text-underline: single;
    }

    a:visited,
    span.MsoHyperlinkFollowed {
      mso-style-noshow: yes;
      mso-style-priority: 99;
      color: #954F72;
      mso-themecolor: followedhyperlink;
      text-decoration: underline;
      text-underline: single;
    }

    .MsoChpDefault {
      mso-style-type: export-only;
      mso-default-props: yes;
      font-size: 11.0pt;
      mso-ansi-font-size: 11.0pt;
      mso-bidi-font-size: 11.0pt;
      mso-ascii-font-family: Calibri;
      mso-ascii-theme-font: minor-latin;
      mso-fareast-theme-font: minor-fareast;
      mso-hansi-font-family: Calibri;
      mso-hansi-theme-font: minor-latin;
      mso-bidi-theme-font: minor-bidi;
    }

    @page WordSection1 {
      size: 612.0pt 792.0pt;
      margin: 70.85pt 3.0cm 70.85pt 3.0cm;
      mso-header-margin: 36.0pt;
      mso-footer-margin: 36.0pt;
      mso-paper-source: 0;
    }

    div.WordSection1 {
      page: WordSection1;
    }
    -->
  </style>
  <!--[if gte mso 10]>
  <style>
  /* Style Definitions */
  table.MsoNormalTable {
    margin: 0;
    padding: 0;
    mso-style-name: "Tabela normal";
    mso-tstyle-rowband-size: 0;
    mso-tstyle-colband-size: 0;
    mso-style-noshow: yes;
    mso-style-parent: "";
    mso-para-margin: 0cm;
    mso-pagination: widow-orphan;
    font-size: 11pt;
    font-family: "Calibri", sans-serif;
    mso-ascii-font-family: Calibri;
    mso-ascii-theme-font: minor-latin;
    mso-hansi-font-family: Calibri;
    mso-hansi-theme-font: minor-latin;
    mso-bidi-theme-font: minor-bidi;
  }
  table.MsoNormalTable2 {
    margin: 0;
    margin: 10px 0 0;
    mso-style-parent: "";
    mso-para-margin: 0cm;
    mso-pagination: widow-orphan;
    font-size: 11pt;
    mso-ascii-font-family: Calibri;
    mso-ascii-theme-font: minor-latin;
    mso-hansi-font-family: Calibri;
    mso-hansi-theme-font: minor-latin;
    mso-bidi-theme-font: minor-bidi;
  }
  table.MsoNormalTable2 tr{
    padding: 6px 0 0;
    margin: 0;
  }
</style>
    <![endif]-->
  <!--[if gte mso 9
      ]><xml> <o:shapedefaults v:ext="edit" spidmax="1028" /> </xml
    ><![endif]-->
  <!--[if gte mso 9
      ]><xml>
        <o:shapelayout v:ext="edit">
          <o:idmap v:ext="edit" data="1" /> </o:shapelayout></xml
    ><![endif]-->
</head>

<body lang="PT-BR" link="blue" vlink="#954F72" style="tab-interval: 35.4pt; word-wrap: normal">
  <table class="MsoNormalTable" cellspacing="0" cellpadding="0" align="left" style="width: 720px">
    <table cellspacing="0" cellpadding="0" align="left">
      <tr>
      <td style="border: 1px solid #f4f3f3; padding: 18px 15px 0;">
      <img src="${logo2.src}" />
    </td>
        <td style="padding-top: 20px;
          background-color: #333333;">
          <table class="MsoNormalTable" cellspacing="0" cellpadding="0" style=" width: 60%;background-color: #333333;">
          <td>
            <tr>
              <td>
              <table class="MsoNormalTable" cellspacing="0" cellpadding="0" style="padding: 0 10px">
                    ${
                      result2 === ""
                        ? "<div></div>"
                        : `
                        <td style="margin-left: 30px;">
                        <table class="MsoNormalTable" cellspacing="0" cellpadding="0"
                        style="font-weight: 600; margin-right: 25px; padding: 5px;border: 1px solid #7ccadd;">
                              <img src="${result2.src}" />
                              </table></td>`
                    }

              <td  style="${result2 === "" ? "" : "margin-left: -30px;"}">
                <table class="MsoNormalTable" cellspacing="0" cellpadding="0" style="margin-left: 25pt;
                padding: 5px 0;
                width: auto;
                  font-weight: 600;">
                  <tr style="
                    margin-left: 30pt;
                    font-weight: 600;
                  ">
                    <span
                        style="
                        color: #7ccadd;
                        font-weight: 900;
                        font-size: 22px;
                        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
                        ${dataNome}
                      </span>
                      <br />
                      <span
                        style="
                        color: #ffffff;
                        font-weight: 100;
                        font-size: 10px;
                        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
                        ${dataArea}
                      </span>
                    </tr>
                  </table>
                  <table class="MsoNormalTable" cellspacing="0" cellpadding="0" style="
          padding-top: 2px;
                  margin-left: 25pt;
                  font-weight: 600;
                ">
                <td style="width: 230px; padding: 10px 0;">
                      <span>
                        <a style="
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              text-decoration: none; color: #ffffff; font-weight: 100; font-size: 9px;"
                          href="tel:${dataTelefonefixo}"><span>${dataTelefonefixo}</span>
                        </a>
                        <br />
                        <a style="
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              text-decoration: none; color: #ffffff; font-weight: 100; font-size: 9px;"
                          href="tel:${dataRamal}"><span>${dataRamal}
                          </span>
                        </a>
                        <br />
                        <a style="
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              text-decoration: none; color: #ffffff; font-weight: 100; font-size: 9px;"
                          href="mailto:${dataEmailPessoal}"><span>${dataEmailPessoal}
                          </span>
                          </a>
                        </span>
                      </td>
                    </table>
                  </td>
  
            </table>
            <table class="MsoNormalTable" cellspacing="0" cellpadding="0"
             style="padding: 0 0 10px;margin: 0; width: 380px;">
                  <tr style="
                  font-size: 10px;
                    margin-left:  ${result === "" ? "20px" : "40px"};
                    font-weight: 600;
                  ">
                      <table class="MsoNormalTable" cellspacing="0" cellpadding="0" style="width: 400px;">
                        <tr>
                        <td style="width: 600px; padding: 10px 0;">
                        <span>
                          <a style="
                          font-size: 9px;
                          text-decoration: none;
                          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                          color: #ffffff;
                        " href=${dataSite}
                            target="_blank"><span>${dataSite}
                            </span>
                          </a>
                          <br />
                          <a style="
                      font-size: 9px;
                      text-decoration: none;
                      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                      color: #ffffff;
                    " href="https://goo.gl/maps"><span>${dataEndereco}
                            </span>
                          </a>
                        </span>
                      </td>
                          <td>
                            <table class="MsoNormalTable" cellspacing="0" cellpadding="0"
                              style="margin: 0 10px; padding: 12px 1px 10px;">
                              <tr>
                                <td style="margin: 0.6px 1.2px 0;">
                                  <a href=${dataInsta}>
                                    <img
                                      src="data:image/png;base64,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"
                                      alt="" />
                                  </a>
                                </td>
                                <td style="margin: 0.6px 0 0;">
                                  <a
                                    href=${daataLinkedin}>
                                    <img
                                      src="data:image/png;base64,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"
                                      alt="" />
                                  </a>
                                </td>
                                <td style="margin: 0.6px 0 0;">
                                
                                  <a href=${dataFacebook}>
                                    <img
                                      src="data:image/png;base64,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" />
                                  </a>
                                </td>
                                <td style="margin: 0.6px 0 0;">
                                  <a href=${dataYoutube}>
                                    <img
                                      src="data:image/png;base64,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"
                                      alt="" />
                                  </a>
                                </td>
                                <td>
                                  <a href=${dataTwitter}>
                                    <img
                                      src="data:image/png;base64,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"
                                      alt="" />
                                  </a>
                                </td>

                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </tr>
                  </table>
                </td>
                <td>
                <td style="margin-left:15px; padding:0 20px;">
                  <table class="MsoNormalTable2" cellspacing="0" cellpadding="0">
                  </table>
                </td>
            </td>
      </tr>
      </td>
    </table>

    </td>
    </tr>
  </table>
  </table>
</body>

</html>`;

  let blob = new Blob([data]);
  const link = window.document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "templateassinatura.htm";
  link.click();
  window.URL.revokeObjectURL(link.href);

  let dataBat = `@echo off
if exist "C:\\Users\\%username%\\Downloads\\templateassinatura.htm" (
  ren templateassinatura.htm "templateassinatura.htm"
)
if exist "C:\\Users\\%username%\\AppData\\Roaming\\Microsoft\\Signatures\\templateassinatura_arquivos" (
  rd /s /q "C:\\Users\\%username%\\AppData\\Roaming\\Microsoft\\Signatures\\templateassinatura_arquivos"
)
if exist "C:\\Users\\%username%\\AppData\\Roaming\\Microsoft\\Signatures\\templateassinatura_arquivos_arquivos" (
  rd /s /q "C:\\Users\\%username%\\AppData\\Roaming\\Microsoft\\Signatures\\templateassinatura_arquivos_arquivos"
)
if exist "C:\\Users\\%username%\\AppData\\Roaming\\Microsoft\\Signatures\\templateassinatura.htm" (
  rd /s /q "C:\\Users\\%username%\\AppData\\Roaming\\Microsoft\\Signatures\\templateassinatura.htm"
)
mkdir "C:\\Users\\%username%\\AppData\\Roaming\\Microsoft\\Signatures\\templateassinatura_arquivos"
mkdir "C:\\Users\\%username%\\AppData\\Roaming\\Microsoft\\Signatures\\templateassinatura_arquivos_arquivos"
move "C:\\Users\\%username%\\Downloads\\templateassinatura.htm" "C:\\Users\\%username%\\AppData\\Roaming\\Microsoft\\Signatures"
cls
@echo.
@echo    *****************************************
@echo    ***                                   ***
@echo    ***  SUA ASSINATURA FOI CONFIGURADA.  ***
@echo    ***  PRESSIONE ENTER PARA SAIR        ***
@echo    ***                                   ***
@echo    *****************************************
@echo.
pause`;

  let bat = new Blob([dataBat], { type: "text/plain;charset=utf-8" });
  const linkbat = window.document.createElement("a");
  linkbat.href = window.URL.createObjectURL(bat);
  linkbat.download = "Clique aqui para configurar assinatura.bat";
  linkbat.click();
  window.URL.revokeObjectURL(linkbat.href);
}
