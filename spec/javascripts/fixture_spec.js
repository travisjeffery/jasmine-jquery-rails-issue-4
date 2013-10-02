//= require helpers/spec_helper

describe("jasmine-jquery", function(){
    it("should load the fixture", function(){
        loadFixtures("my-fixture.html")
        expect($("#js-my-div")).toHaveText("Hello, world")
    })
})
