function DiscBody() {
  return (
    <div className="disc" aria-hidden="true">
      <div className="disc-face" />
      <div className="disc-hub" />
      <div className="disc-gloss" />
      <div className="disc-rim" />
    </div>
  );
}

export default function Disc() {
  return (
    <div className="disc-scene">
      <DiscBody />
      <div className="disc-reflection">
        <DiscBody />
      </div>
    </div>
  );
}
