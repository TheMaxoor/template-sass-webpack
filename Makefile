build:
	@echo "Updating dependencies..."
	@yarn install
	@echo "Building the project..."
	@NODE_ENV=production yarn run build

run:
	@echo "Starting development server..."
	@yarn install
	@yarn run start
