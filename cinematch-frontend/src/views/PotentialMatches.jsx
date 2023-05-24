import PotentialMatchCard from './../components/PotentialMatchCard';

export default function PotentialMatches() {
  return (
    <>
      <h3 className="header-tagline">What other people want to watch</h3>
      <div className="row">
        <PotentialMatchCard usermovie={"movie choice"} username={"bob"} userlocation={"venlo"} />
        <PotentialMatchCard usermovie={"movie choice"} username={"alice"} userlocation={"amsterdam"} />
        <PotentialMatchCard usermovie={"movie choice"} username={"boris"} userlocation={"london"} />
      </div>
    </>
  )
}