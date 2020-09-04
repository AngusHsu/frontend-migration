import React, { useEffect, useState } from "react";

const InsertMovie = ({ onInsert }) => {
  const [chTitle, setChTitle] = useState("");
  const [engTitle, setEngTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [valChiTitle, setValChiTitle] = useState(true);
  const [valEngTitle, setValEngTitle] = useState(true);
  const [valIntro, setValIntro] = useState(true);

  const validateInput = () => {
    if (!chTitle || chTitle.length > 50) {
      setValChiTitle(false);
    }
    if (!engTitle || engTitle.length > 100 || engTitle.match(/[$%^&*]/g)) {
      setValEngTitle(false);
    }
    if (
      !intro ||
      intro.length < 10 ||
      intro.length > 255 ||
      !intro.startsWith("Intro")
    ) {
      setValIntro(false);
    }
  };

  const resetAlert = () => {
    setValChiTitle(true);
    setValEngTitle(true);
    setValIntro(true);
  };

  const resetInputs = () => {
    setChTitle("");
    setEngTitle("");
    setIntro("");
  };

  const onSubmit = () => {
    resetAlert();
    validateInput();
  };

  useEffect(() => {
    if (valChiTitle && valEngTitle && valIntro && chTitle) {
      onInsert(prev => [
        { ch_name: chTitle, eng_name: engTitle, intro },
        ...prev
      ]);
      resetInputs();
    }
  }, [valChiTitle, valEngTitle, valIntro]);

  return (
    <div>
      <div className="form-group">
        <label htmlFor="input-title-ch">Title in Chinese</label>
        <input
          type="text"
          className="form-control"
          id="input-title-ch"
          placeholder="金牌特務"
          value={chTitle}
          onChange={e => setChTitle(e.target.value)}
        />
        {!valChiTitle && (
          <div style={{ color: "red" }}>
            Required. String length must between 1 to 50.
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="input-title-eng">Title in English</label>
        <input
          type="text"
          className="form-control"
          id="input-title-eng"
          placeholder="Kingsman"
          value={engTitle}
          onChange={e => setEngTitle(e.target.value)}
        />
        {!valEngTitle && (
          <div style={{ color: "red" }}>
            Required. String length must between 1 to 100 and cannot include the
            symbols $, %, ^, &, *.
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="input-intro">Intro</label>
        <input
          type="text"
          className="form-control"
          id="input-intro"
          placeholder="是一部於2015年上映，由英國、美國合拍的諜報喜劇動作片..."
          value={intro}
          onChange={e => setIntro(e.target.value)}
        />
        {!valIntro && (
          <div style={{ color: "red" }}>
            Required. String length must between 10 to 255 and need to start
            with Intro. e.g. Intro: This is ..., Intro, Once upon....
          </div>
        )}
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>
        Insert
      </button>
    </div>
  );
};

export default InsertMovie;
