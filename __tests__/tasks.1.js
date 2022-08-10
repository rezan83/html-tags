const path = require('path');

/**
 * find element by if its tag name is included in the given elements and its text includes  the given possibleTexts
 * @param {[Object]} elements 
 * @param {[String]} possibleTags 
 * @param {[String]} possibleTexts 
 * @returns the found element or undefined if not found
 */
const findElement =  (elements, possibleTags, possibleTexts ) => { 
    return elements.find(el => possibleTags.includes(el.tagName)  && possibleTexts.reduce((acc, text) => acc && el.textContent.trim().toLowerCase().includes(text.toLocaleLowerCase()), true));
}
describe('HTML tags', () => {
    let elements;
    // load exercise.html
    beforeAll(async () => {
        await page.goto('file://' + path.resolve('./exercise.html'));
        elements = await page.$eval("body",  (body) => { 
            return  Array.from(body.querySelectorAll('*')).map(el => {return {tagName: el.tagName, textContent: el.textContent}});
        });
    })
    // checking whether The 1st Element is Headline h1 or h2
    it('The 1st Element should be a Headline H1 or H2', async () => {
        try{
            const element = findElement(elements, ["H1", "H2"], ["quick", "brown", "fox"]);
            expect(element).toBeTruthy();
        }catch{
            fail();
        }
    });
    // checking whether The 2nd Element is Headline h4, h5 or h6 
    it('The 2nd Element should be a Headline H4, H5 or H6', async () => {
        try{
            const element = findElement(elements, ["H4", "H5", "H6"], ["Wikipedia", "free", "encyclopedia"]);
            expect(element).toBeTruthy();
        }catch{
            fail();
        }
    });
    // checking whether The 3rd Element is Paragraph P 
    it('The 3rd Element should be a paragraph P', async () => {
        try{
            const element = findElement(elements, ["P"], ["English", "quick", "contains"]);
            expect(element).toBeTruthy();
        }catch{
            fail();
        }
    });
    // checking whether The 4th Element is Headline h1, h2 or h3
    it('The 4th Element should be a Headline h1, h2 or h3', async () => {
        try{
            const element = findElement(elements, ["H1", "H2", "H3"], ["History"]);
            expect(element).toBeTruthy();
        }catch{
            fail();
        }
    });
    // checking whether The 5th Element is paragraph P
    it('The 5th Element should be a paragraph P', async () => {
        try{
            const element = findElement(elements, ["P"], ["earliest", "appearance", "phrase", "Boston"]);
            expect(element).toBeTruthy();
        }catch{
            fail();
        }
    });
    // checking whether The 6th Element is paragraph P
    it('The 6th Element should be a paragraph P', async () => {
        try{
            const element = findElement(elements, ["P"], ["typewriters", "grew", "19th", "appearing"]);
            expect(element).toBeTruthy();
        }catch{
            fail();
        }
    });
    // checking whether The 7th Element is paragraph P
    it('The 7th Element should be a paragraph P', async () => {
        try{
            const element = findElement(elements, ["P"], ["message", "Moscow–Washington", "hotline", "JUMPED"]);
            expect(element).toBeTruthy();
        }catch{
            fail();
        }
    });
    // checking whether The 7th Element is paragraph P
    it('The 7th Element should be a paragraph P', async () => {
        try{
            const element = findElement(elements, ["P"], ["During", "technicians", "typewriters", "sentence"]);
            expect(element).toBeTruthy();
        }catch{
            fail();
        }
    });
    // checking whether The 8th Element is Headline h1, h2 or h3
    it('The 8th Element should be a Headline h1, h2 or h3', async () => {
        try{
            const element = findElement(elements, ["H1", "H2", "H3"], ["Computer", "usage"]);
            expect(element).toBeTruthy();
        }catch{
            fail();
        }
    });
    // checking whether The 9th Element is paragraph P
    it('The 9th Element should be a paragraph P', async () => {
        try{
            const element = findElement(elements, ["P"], ["computers", "pangram"]);
            expect(element).toBeTruthy();
        }catch{
            fail();
        }
    });
});
