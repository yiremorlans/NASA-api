

const SpaceInfo = ({ spaceTitle, spaceImg, spaceExplanation }) => {
  return (
    <>
        <img src={spaceImg} alt="" />
        <h2>{spaceTitle}</h2>
        <p>{spaceExplanation}</p>
    </>
  )
}

export default SpaceInfo