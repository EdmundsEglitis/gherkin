const Translations = () => {
  return (
    <div>
      <h2>Gherkin termini</h2>
      <table >
        <thead>
          <tr>
            <th>Angļu valodā</th>
            <th>Latviešu valodā</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Feature</td><td>Funkcionalitāte</td></tr>
          <tr><td>Background</td><td>Konteksts Situācija</td></tr>
          <tr><td>Rule</td><td>Rule</td></tr>
          <tr><td>Scenario</td><td>Piemērs Scenārijs</td></tr>
          <tr><td>Scenario Outline</td><td>Scenārijs pēc parauga</td></tr>
          <tr><td>Examples</td><td>Piemēri Paraugs</td></tr>
          <tr><td>Given</td><td>Kad</td></tr>
          <tr><td>When</td><td>Ja</td></tr>
          <tr><td>Then</td><td>Tad</td></tr>
          <tr><td>And</td><td>Un</td></tr>
          <tr><td>But</td><td>Bet</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Translations;