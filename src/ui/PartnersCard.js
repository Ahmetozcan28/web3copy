export default function PartnersCard({ key, img }) {
  return (
    <div key={key} className="text-white text-2xl">
      <img src={img} />
    </div>
  );
}
