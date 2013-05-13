all: run

run: 

debug:

clean:

test:
	./node_modules/.bin/mocha ./tests/jsTime.js

.PHONY: all clean run debug test
