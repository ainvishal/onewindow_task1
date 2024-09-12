

export default function Cardcomponent({item}) {
    return(
        <>
            <div className="card">
                <div className="card-name">
                    <h2>{item.name}</h2>
                </div>
                <div className="out-main">
                <div className="ranking">
                    <h3><strong>University Rankings</strong></h3>
                    <p>Qs World Ranking : {item.academic_reputation.university_rankings.QS_World_Ranking}</p>
                    <p>Times Higher Education : {item.academic_reputation.university_rankings.Times_Higher_Education}</p>
                </div>
                <div className="education">
                    <h3><strong>Cost of Education</strong></h3>
                    <p>Tuition fees : {item.cost_of_education.tuition_fees}</p>
                    <h3><strong>living expenses</strong></h3>
                    <p>Living expenses : {item.living_expenses.cost_of_living}</p>
                </div>
                </div>
                
                <div className="card-accreditation">
                    <h4>{item.academic_reputation.accreditation}</h4>
                 </div>
            </div>
        </>
    );
}