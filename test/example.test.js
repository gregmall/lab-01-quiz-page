// IMPORT MODULES under test here:
// import example from '../example.js';
import {confirmedYes} from '../quiz-functions.js';


const test = QUnit.test;

test('it should return true with anything that starts with a Y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const word1 = 'yes';
    const word2 = 'yep';
    const word3 = 'yeah';
    const word4 = 'ya';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual1 = confirmedYes(word1);
    const actual2 = confirmedYes(word2);
    const actual3 = confirmedYes(word3);
    const actual4 = confirmedYes(word4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
    expect.equal(actual4, expected);
   
});
