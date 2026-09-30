# DeployPilot verification fixture

This branch tests immutable archive download, Docker build, HTTP readiness, failed builds, deadlines and cancellation. It does not change StudySync main. Use deploypilot-fixture as build context; the server listens on port 3000 and returns HTTP 200 only at /health. Dockerfile.failure fails with exit 23. Dockerfile.slow delays the image build for two minutes.
